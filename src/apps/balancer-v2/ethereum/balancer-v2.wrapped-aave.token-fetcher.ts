import { Inject } from '@nestjs/common';
import _ from 'lodash';

import { APP_TOOLKIT, IAppToolkit } from '~app-toolkit/app-toolkit.interface';
import { Register } from '~app-toolkit/decorators';
import { buildDollarDisplayItem } from '~app-toolkit/helpers/presentation/display-item.present';
import { getAppImg } from '~app-toolkit/helpers/presentation/image.present';
import { AAVE_V2_DEFINITION } from '~apps/aave-v2';
import { ContractType } from '~position/contract.interface';
import { PositionFetcher } from '~position/position-fetcher.interface';
import { AppTokenPosition } from '~position/position.interface';
import { Network } from '~types/network.interface';

import { BALANCER_V2_DEFINITION } from '../balancer-v2.definition';
import { BalancerV2ContractFactory } from '../contracts';

const appId = BALANCER_V2_DEFINITION.id;
const groupId = BALANCER_V2_DEFINITION.groups.wrappedAave.id;
const network = Network.ETHEREUM_MAINNET;

const wrappedAaveTokenAddresses = [
  '0xf8fd466f12e236f4c96f7cce6c79eadb819abf58', // wrapped aUSDT
  '0x02d60b84491589974263d922d9cc7a3152618ef6', // wrapped aDAI
  '0xd093fa4fb80d09bb30817fdcd442d4d02ed3e5de', // wrapped aUSDC
];

@Register.TokenPositionFetcher({ appId, groupId, network })
export class EthereumBalancerV2WrappedAaveTokenFetcher implements PositionFetcher<AppTokenPosition> {
  constructor(
    @Inject(APP_TOOLKIT) private readonly appToolkit: IAppToolkit,
    @Inject(BalancerV2ContractFactory) private readonly balancerV2ContractFactory: BalancerV2ContractFactory,
  ) {}

  async getPositions() {
    const multicall = this.appToolkit.getMulticall(network);

    const appTokens = await this.appToolkit.getAppTokenPositions({
      appId: AAVE_V2_DEFINITION.id,
      groupIds: [AAVE_V2_DEFINITION.groups.supply.id],
      network,
    });

    const wrappedAavetokens = await Promise.all(
      wrappedAaveTokenAddresses.map(async address => {
        const tokenContract = this.balancerV2ContractFactory.balancerWrappedAave({ address, network });

        const [label, symbol, supplyRaw, decimals, aaveTokenAddressRaw] = await Promise.all([
          multicall.wrap(tokenContract).name(),
          multicall.wrap(tokenContract).symbol(),
          multicall.wrap(tokenContract).totalSupply(),
          multicall.wrap(tokenContract).decimals(),
          multicall.wrap(tokenContract).ATOKEN(),
        ]);

        const aaveTokenAddress = aaveTokenAddressRaw.toLowerCase();

        const underlyingToken = appTokens.find(x => x.address == aaveTokenAddress);
        if (!underlyingToken) return null;

        const supply = Number(supplyRaw) / 10 ** decimals;
        const pricePerShare = 1;

        const underlyingAaveTokenContract = this.balancerV2ContractFactory.erc20({
          address: aaveTokenAddress,
          network,
        });

        const [underlyingBalanceRaw, underlyingDecimals] = await Promise.all([
          multicall.wrap(underlyingAaveTokenContract).balanceOf(address),
          multicall.wrap(underlyingAaveTokenContract).decimals(),
        ]);

        const underlyingBalance = Number(underlyingBalanceRaw) / 10 ** underlyingDecimals;
        const liquidity = underlyingBalance * underlyingToken.price;
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
          tokens: [underlyingToken],
          dataProps,
          displayProps,
        };

        return token;
      }),
    );

    return _.compact(wrappedAavetokens);
  }
}
