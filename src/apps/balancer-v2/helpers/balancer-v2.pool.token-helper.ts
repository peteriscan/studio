import { Inject, Injectable } from '@nestjs/common';
import _ from 'lodash';
import { isEmpty, isUndefined } from 'lodash';

import { APP_TOOLKIT, IAppToolkit } from '~app-toolkit/app-toolkit.interface';
import { buildDollarDisplayItem } from '~app-toolkit/helpers/presentation/display-item.present';
import { getTokenImg } from '~app-toolkit/helpers/presentation/image.present';
import { ContractType } from '~position/contract.interface';
import { AppTokenPosition } from '~position/position.interface';
import { AppGroupsDefinition } from '~position/position.service';
import { Network } from '~types/network.interface';

import { BalancerV2ContractFactory } from '../contracts';

export enum BalancerV2PoolLabelStrategy {
  TOKEN_SYMBOLS = 'token-symbols',
  POOL_NAME = 'pool-name',
}

type BalancerV2PoolTokenDataProps = {
  liquidity: number;
  fee: number;
  reserves: number[];
  weights: number[];
  volume: number;
};

type GetBalancerV2PoolTokensParams = {
  network: Network;
  appId: string;
  groupId: string;
  appTokenDependencies?: AppGroupsDefinition[];
  vaultAddress: string;
  minLiquidity?: number;
  resolvePoolTokenAddresses: (opts: {
    appId: string;
    network: Network;
  }) => Promise<{ address: string; volume: number; poolType: string }[]>;
  resolvePoolLabelStrategy?: () => BalancerV2PoolLabelStrategy;
};

@Injectable()
export class BalancerV2PoolTokensHelper {
  constructor(
    @Inject(APP_TOOLKIT) private readonly appToolkit: IAppToolkit,
    @Inject(BalancerV2ContractFactory) private readonly contractFactory: BalancerV2ContractFactory,
  ) {}

  async getTokenMarketData({
    network,
    appId,
    groupId,
    appTokenDependencies = [],
    vaultAddress,
    minLiquidity = 0,
    resolvePoolTokenAddresses,
    resolvePoolLabelStrategy = () => BalancerV2PoolLabelStrategy.TOKEN_SYMBOLS,
  }: GetBalancerV2PoolTokensParams) {
    const multicall = this.appToolkit.getMulticall(network);
    const prices = await this.appToolkit.getBaseTokenPrices(network);
    const appTokens = await this.appToolkit.getAppTokenPositions(...appTokenDependencies);
    const poolTokenData = await resolvePoolTokenAddresses({ appId, network });
    const vaultContract = this.contractFactory.balancerVault({ network, address: vaultAddress });

    const pools = await Promise.all(
      poolTokenData.map(async ({ address, volume, poolType }) => {
        const poolContract = this.contractFactory.balancerPool({ network, address });
        const stablePhantomPoolContract = this.contractFactory.balancerStablePhantomPool({ network, address });
        const poolId = await multicall.wrap(poolContract).getPoolId();

        // Resolve underlying tokens
        const poolTokensRaw = await multicall.wrap(vaultContract).getPoolTokens(poolId);
        const tokenAddresses = poolTokensRaw.tokens.map(v => v.toLowerCase());
        const tokensRaw = tokenAddresses.map(tokenAddress => {
          const baseToken = prices.find(price => price.address === tokenAddress);
          const appToken = appTokens.find(p => p.address === tokenAddress);

          return appToken ?? baseToken;
        });

        // Some balancer pool have bb-a-usd which can have a circular dependency
        const tokensFiltered = tokensRaw.filter(x => x?.address != address);

        if (tokensFiltered.some(isUndefined)) return null;
        const tokens = _.compact(tokensFiltered);

        const reserves = tokens.map((t, i) => Number(poolTokensRaw.balances[i]) / 10 ** t.decimals);
        const liquidity = tokens.reduce((acc, v, i) => acc + v.price * reserves[i], 0);
        if (liquidity < minLiquidity) return null;

        const [decimals, symbol, feeRaw, weightsRaw] = await Promise.all([
          multicall.wrap(poolContract).decimals(),
          multicall.wrap(poolContract).symbol(),
          multicall
            .wrap(poolContract)
            .getSwapFeePercentage()
            .catch(() => '100000000000000000'),
          multicall
            .wrap(poolContract)
            .getNormalizedWeights()
            .catch(() => []),
        ]);

        const supplyRaw =
          poolType != 'StablePhantom'
            ? await multicall.wrap(poolContract).totalSupply()
            : await multicall.wrap(stablePhantomPoolContract).getVirtualSupply();

        // Data Props
        const supply = Number(supplyRaw) / 10 ** decimals;
        const fee = Number(feeRaw) / 10 ** 18;
        const price = liquidity / supply;
        const pricePerShare = reserves.map(r => r / supply);
        const reservePercentages = tokens.map((t, i) => reserves[i] * (t.price / liquidity));
        const weights = tokens.map((_, i) =>
          isEmpty(weightsRaw) ? 1 / tokens.length : Number(weightsRaw[i]) / 10 ** 18,
        );

        // Display Props
        const labelStrategy = resolvePoolLabelStrategy();
        const label =
          labelStrategy === BalancerV2PoolLabelStrategy.POOL_NAME
            ? await multicall.wrap(poolContract).name()
            : tokens.map(v => v.symbol).join(' / ');
        const secondaryLabel = reservePercentages.map(p => `${Math.round(p * 100)}%`).join(' / ');
        const images = tokens.map(v => getTokenImg(v.address, network));

        const token: AppTokenPosition<BalancerV2PoolTokenDataProps> = {
          type: ContractType.APP_TOKEN,
          address,
          network,
          appId,
          groupId,
          symbol,
          decimals,
          supply,
          price,
          pricePerShare,
          tokens,

          dataProps: {
            fee,
            liquidity,
            reserves,
            weights,
            volume,
          },

          displayProps: {
            label,
            secondaryLabel,
            images,
            statsItems: [
              {
                label: 'Liquidity',
                value: buildDollarDisplayItem(liquidity),
              },
            ],
          },
        };

        return token;
      }),
    );

    return _.compact(pools);
  }
}
