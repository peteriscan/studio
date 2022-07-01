import { Inject } from '@nestjs/common';
import _ from 'lodash';

import { APP_TOOLKIT, IAppToolkit } from '~app-toolkit/app-toolkit.interface';
import { Register } from '~app-toolkit/decorators';
import { buildDollarDisplayItem } from '~app-toolkit/helpers/presentation/display-item.present';
import { getAppImg } from '~app-toolkit/helpers/presentation/image.present';
import { ContractType } from '~position/contract.interface';
import { PositionFetcher } from '~position/position-fetcher.interface';
import { AppTokenPosition } from '~position/position.interface';
import { Network } from '~types/network.interface';

import { BALANCER_V2_DEFINITION } from '../balancer-v2.definition';
import { BalancerV2ContractFactory } from '../contracts';

const appId = BALANCER_V2_DEFINITION.id;
const groupId = BALANCER_V2_DEFINITION.groups.boostedAave.id;
const network = Network.ETHEREUM_MAINNET;

const boostedAaveTokenAddresses = [
  '0x2bbf681cc4eb09218bee85ea2a5d3d13fa40fc0c', // bb-a-USDT
  '0x804cdb9116a10bb78768d3252355a1b18067bf8f', // bb-a-DAI
  '0x9210f1204b5a24742eba12f710636d76240df3d0', // bb-a-USDC
];

@Register.TokenPositionFetcher({ appId, groupId, network })
export class EthereumBalancerV2BoostedAaveTokenFetcher implements PositionFetcher<AppTokenPosition> {
  constructor(
    @Inject(APP_TOOLKIT) private readonly appToolkit: IAppToolkit,
    @Inject(BalancerV2ContractFactory) private readonly balancerV2ContractFactory: BalancerV2ContractFactory,
  ) {}

  async getPositions() {
    const multicall = this.appToolkit.getMulticall(network);
    const baseTokens = await this.appToolkit.getBaseTokenPrices(network);
    const appTokens = await this.appToolkit.getAppTokenPositions({
      appId: BALANCER_V2_DEFINITION.id,
      groupIds: [BALANCER_V2_DEFINITION.groups.wrappedAave.id],
      network,
    });

    const allTokens = [...appTokens, ...baseTokens];

    const tokens = await Promise.all(
      boostedAaveTokenAddresses.map(async address => {
        const tokenContract = this.balancerV2ContractFactory.balancerBoostedAave({ address, network });

        const [label, symbol, supplyRaw, decimals, mainTokenAddressRaw, wrappedAaveTokenAddressRaw, vaultAddressRaw] =
          await Promise.all([
            multicall.wrap(tokenContract).name(),
            multicall.wrap(tokenContract).symbol(),
            multicall.wrap(tokenContract).getVirtualSupply(),
            multicall.wrap(tokenContract).decimals(),
            multicall.wrap(tokenContract).getMainToken(),
            multicall.wrap(tokenContract).getWrappedToken(),
            multicall.wrap(tokenContract).getVault(),
          ]);

        const mainTokenAddress = mainTokenAddressRaw.toLowerCase();
        const wrappedAaveTokenAddress = wrappedAaveTokenAddressRaw.toLowerCase();
        const vaultAddress = vaultAddressRaw.toLowerCase();

        const mainToken = allTokens.find(x => x.address == mainTokenAddress);
        const wrappedAaveToken = allTokens.find(x => x.address == wrappedAaveTokenAddress);
        if (!mainToken || !wrappedAaveToken) return null;

        const mainTokenContract = this.balancerV2ContractFactory.erc20({ address: mainTokenAddress, network });
        const wrappedAaveTokenContract = this.balancerV2ContractFactory.erc20({
          address: wrappedAaveTokenAddress,
          network,
        });

        const [mainBalanceRaw, mainDecimals] = await Promise.all([
          multicall.wrap(mainTokenContract).balanceOf(vaultAddress),
          multicall.wrap(mainTokenContract).decimals(),
        ]);
        const mainReserve = Number(mainBalanceRaw) / 10 ** mainDecimals;

        const [wrappedAaveBalanceRaw, wrappedAaveDecimals] = await Promise.all([
          multicall.wrap(wrappedAaveTokenContract).balanceOf(vaultAddress),
          multicall.wrap(wrappedAaveTokenContract).decimals(),
        ]);
        const wrappedAaveReserve = Number(wrappedAaveBalanceRaw) / 10 ** wrappedAaveDecimals;

        const tokens = [mainToken, wrappedAaveToken];
        const supply = Number(supplyRaw) / 10 ** decimals;
        const pricePerShare = 1;
        const liquidity = mainToken.price * mainReserve + wrappedAaveToken.price * wrappedAaveReserve;
        const price = liquidity / supply;

        const secondaryLabel = buildDollarDisplayItem(price);
        const images = [getAppImg(appId)];
        const dataProps = { liquidity };
        const displayProps = {
          label,
          secondaryLabel,
          images,
          statsItems: [{ label: 'Liquidity', value: buildDollarDisplayItem(liquidity) }],
        };

        const token: AppTokenPosition = {
          type: ContractType.APP_TOKEN,
          address,
          appId,
          groupId,
          network,
          symbol,
          decimals,
          supply,
          price,
          pricePerShare,
          tokens,
          dataProps,
          displayProps,
        };

        return token;
      }),
    );

    return _.compact(tokens);
  }
}
