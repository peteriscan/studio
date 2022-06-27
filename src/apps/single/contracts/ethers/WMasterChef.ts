/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export interface WMasterChefInterface extends utils.Interface {
  functions: {
    'balanceOf(address,uint256)': FunctionFragment;
    'balanceOfBatch(address[],uint256[])': FunctionFragment;
    'burn(uint256,uint256)': FunctionFragment;
    'chef()': FunctionFragment;
    'collSizeToLpBalance(uint256,uint256)': FunctionFragment;
    'decodeId(uint256)': FunctionFragment;
    'dedicatedWorkers(address)': FunctionFragment;
    'dexHelper()': FunctionFragment;
    'encodeId(uint256)': FunctionFragment;
    'exists(uint256)': FunctionFragment;
    'getDexHelper()': FunctionFragment;
    'getTokenByPid(uint256)': FunctionFragment;
    'getUnderlyingToken(uint256)': FunctionFragment;
    'harvestReward(uint256)': FunctionFragment;
    'initialize(address,address)': FunctionFragment;
    'isApprovedForAll(address,address)': FunctionFragment;
    'lpBalanceToCollSize(uint256,uint256)': FunctionFragment;
    'mint(uint256,uint256)': FunctionFragment;
    'owner()': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'rewardToken()': FunctionFragment;
    'safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)': FunctionFragment;
    'safeTransferFrom(address,address,uint256,uint256,bytes)': FunctionFragment;
    'setApprovalForAll(address,bool)': FunctionFragment;
    'setDedicatedWorkers(address[],bool)': FunctionFragment;
    'setDexHelper(address)': FunctionFragment;
    'stake(uint256,uint256)': FunctionFragment;
    'supportsInterface(bytes4)': FunctionFragment;
    'totalSupply(uint256)': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'uri(uint256)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'balanceOf'
      | 'balanceOfBatch'
      | 'burn'
      | 'chef'
      | 'collSizeToLpBalance'
      | 'decodeId'
      | 'dedicatedWorkers'
      | 'dexHelper'
      | 'encodeId'
      | 'exists'
      | 'getDexHelper'
      | 'getTokenByPid'
      | 'getUnderlyingToken'
      | 'harvestReward'
      | 'initialize'
      | 'isApprovedForAll'
      | 'lpBalanceToCollSize'
      | 'mint'
      | 'owner'
      | 'renounceOwnership'
      | 'rewardToken'
      | 'safeBatchTransferFrom'
      | 'safeTransferFrom'
      | 'setApprovalForAll'
      | 'setDedicatedWorkers'
      | 'setDexHelper'
      | 'stake'
      | 'supportsInterface'
      | 'totalSupply'
      | 'transferOwnership'
      | 'uri',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'balanceOf', values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'balanceOfBatch', values: [string[], BigNumberish[]]): string;
  encodeFunctionData(functionFragment: 'burn', values: [BigNumberish, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'chef', values?: undefined): string;
  encodeFunctionData(functionFragment: 'collSizeToLpBalance', values: [BigNumberish, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'decodeId', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'dedicatedWorkers', values: [string]): string;
  encodeFunctionData(functionFragment: 'dexHelper', values?: undefined): string;
  encodeFunctionData(functionFragment: 'encodeId', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'exists', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'getDexHelper', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getTokenByPid', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'getUnderlyingToken', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'harvestReward', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'initialize', values: [string, string]): string;
  encodeFunctionData(functionFragment: 'isApprovedForAll', values: [string, string]): string;
  encodeFunctionData(functionFragment: 'lpBalanceToCollSize', values: [BigNumberish, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'mint', values: [BigNumberish, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewardToken', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'safeBatchTransferFrom',
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'safeTransferFrom',
    values: [string, string, BigNumberish, BigNumberish, BytesLike],
  ): string;
  encodeFunctionData(functionFragment: 'setApprovalForAll', values: [string, boolean]): string;
  encodeFunctionData(functionFragment: 'setDedicatedWorkers', values: [string[], boolean]): string;
  encodeFunctionData(functionFragment: 'setDexHelper', values: [string]): string;
  encodeFunctionData(functionFragment: 'stake', values: [BigNumberish, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'supportsInterface', values: [BytesLike]): string;
  encodeFunctionData(functionFragment: 'totalSupply', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [string]): string;
  encodeFunctionData(functionFragment: 'uri', values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'balanceOfBatch', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'burn', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'chef', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'collSizeToLpBalance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'decodeId', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'dedicatedWorkers', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'dexHelper', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'encodeId', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'exists', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getDexHelper', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getTokenByPid', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getUnderlyingToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'harvestReward', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isApprovedForAll', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lpBalanceToCollSize', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'mint', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'safeBatchTransferFrom', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'safeTransferFrom', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setApprovalForAll', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setDedicatedWorkers', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setDexHelper', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'stake', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'supportsInterface', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'uri', data: BytesLike): Result;

  events: {
    'ApprovalForAll(address,address,bool)': EventFragment;
    'Burn(uint256,uint256,uint256)': EventFragment;
    'Harvest(uint256,uint256)': EventFragment;
    'Mint(uint256,uint256,uint256)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
    'SetWorkers(address,bool)': EventFragment;
    'Stake(uint256,uint256)': EventFragment;
    'TransferBatch(address,address,address,uint256[],uint256[])': EventFragment;
    'TransferSingle(address,address,address,uint256,uint256)': EventFragment;
    'URI(string,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'ApprovalForAll'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Burn'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Harvest'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Mint'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SetWorkers'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Stake'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'TransferBatch'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'TransferSingle'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'URI'): EventFragment;
}

export interface ApprovalForAllEventObject {
  account: string;
  operator: string;
  approved: boolean;
}
export type ApprovalForAllEvent = TypedEvent<[string, string, boolean], ApprovalForAllEventObject>;

export type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;

export interface BurnEventObject {
  pid: BigNumber;
  collAmount: BigNumber;
  lpAmount: BigNumber;
}
export type BurnEvent = TypedEvent<[BigNumber, BigNumber, BigNumber], BurnEventObject>;

export type BurnEventFilter = TypedEventFilter<BurnEvent>;

export interface HarvestEventObject {
  pid: BigNumber;
  rewardAmount: BigNumber;
}
export type HarvestEvent = TypedEvent<[BigNumber, BigNumber], HarvestEventObject>;

export type HarvestEventFilter = TypedEventFilter<HarvestEvent>;

export interface MintEventObject {
  pid: BigNumber;
  collAmount: BigNumber;
  lpAmount: BigNumber;
}
export type MintEvent = TypedEvent<[BigNumber, BigNumber, BigNumber], MintEventObject>;

export type MintEventFilter = TypedEventFilter<MintEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface SetWorkersEventObject {
  workers: string;
  ok: boolean;
}
export type SetWorkersEvent = TypedEvent<[string, boolean], SetWorkersEventObject>;

export type SetWorkersEventFilter = TypedEventFilter<SetWorkersEvent>;

export interface StakeEventObject {
  pid: BigNumber;
  lpAmount: BigNumber;
}
export type StakeEvent = TypedEvent<[BigNumber, BigNumber], StakeEventObject>;

export type StakeEventFilter = TypedEventFilter<StakeEvent>;

export interface TransferBatchEventObject {
  operator: string;
  from: string;
  to: string;
  ids: BigNumber[];
  values: BigNumber[];
}
export type TransferBatchEvent = TypedEvent<
  [string, string, string, BigNumber[], BigNumber[]],
  TransferBatchEventObject
>;

export type TransferBatchEventFilter = TypedEventFilter<TransferBatchEvent>;

export interface TransferSingleEventObject {
  operator: string;
  from: string;
  to: string;
  id: BigNumber;
  value: BigNumber;
}
export type TransferSingleEvent = TypedEvent<[string, string, string, BigNumber, BigNumber], TransferSingleEventObject>;

export type TransferSingleEventFilter = TypedEventFilter<TransferSingleEvent>;

export interface URIEventObject {
  value: string;
  id: BigNumber;
}
export type URIEvent = TypedEvent<[string, BigNumber], URIEventObject>;

export type URIEventFilter = TypedEventFilter<URIEvent>;

export interface WMasterChef extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: WMasterChefInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    balanceOf(account: string, id: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    balanceOfBatch(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<[BigNumber[]]>;

    burn(
      id: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    chef(overrides?: CallOverrides): Promise<[string]>;

    collSizeToLpBalance(
      collId: BigNumberish,
      collSize: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { balance: BigNumber }>;

    decodeId(id: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & { pid: BigNumber }>;

    dedicatedWorkers(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    dexHelper(overrides?: CallOverrides): Promise<[string]>;

    encodeId(pid: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & { id: BigNumber }>;

    exists(id: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;

    getDexHelper(overrides?: CallOverrides): Promise<[string]>;

    getTokenByPid(pid: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    getUnderlyingToken(id: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    harvestReward(
      pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    initialize(
      _chef: string,
      _rewardToken: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    isApprovedForAll(account: string, operator: string, overrides?: CallOverrides): Promise<[boolean]>;

    lpBalanceToCollSize(
      collId: BigNumberish,
      balance: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { collSize: BigNumber }>;

    mint(
      pid: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    rewardToken(overrides?: CallOverrides): Promise<[string]>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setDedicatedWorkers(
      workers: string[],
      ok: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setDexHelper(
      helper: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    stake(
      pid: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;

    totalSupply(id: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    uri(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
  };

  balanceOf(account: string, id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  balanceOfBatch(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber[]>;

  burn(
    id: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  chef(overrides?: CallOverrides): Promise<string>;

  collSizeToLpBalance(collId: BigNumberish, collSize: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  decodeId(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  dedicatedWorkers(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  dexHelper(overrides?: CallOverrides): Promise<string>;

  encodeId(pid: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  exists(id: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  getDexHelper(overrides?: CallOverrides): Promise<string>;

  getTokenByPid(pid: BigNumberish, overrides?: CallOverrides): Promise<string>;

  getUnderlyingToken(id: BigNumberish, overrides?: CallOverrides): Promise<string>;

  harvestReward(
    pid: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  initialize(
    _chef: string,
    _rewardToken: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  isApprovedForAll(account: string, operator: string, overrides?: CallOverrides): Promise<boolean>;

  lpBalanceToCollSize(collId: BigNumberish, balance: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  mint(
    pid: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  rewardToken(overrides?: CallOverrides): Promise<string>;

  safeBatchTransferFrom(
    from: string,
    to: string,
    ids: BigNumberish[],
    amounts: BigNumberish[],
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  safeTransferFrom(
    from: string,
    to: string,
    id: BigNumberish,
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setApprovalForAll(
    operator: string,
    approved: boolean,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setDedicatedWorkers(
    workers: string[],
    ok: boolean,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setDexHelper(
    helper: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  stake(
    pid: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  totalSupply(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  uri(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    balanceOf(account: string, id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    balanceOfBatch(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber[]>;

    burn(id: BigNumberish, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    chef(overrides?: CallOverrides): Promise<string>;

    collSizeToLpBalance(collId: BigNumberish, collSize: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    decodeId(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    dedicatedWorkers(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    dexHelper(overrides?: CallOverrides): Promise<string>;

    encodeId(pid: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    exists(id: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    getDexHelper(overrides?: CallOverrides): Promise<string>;

    getTokenByPid(pid: BigNumberish, overrides?: CallOverrides): Promise<string>;

    getUnderlyingToken(id: BigNumberish, overrides?: CallOverrides): Promise<string>;

    harvestReward(pid: BigNumberish, overrides?: CallOverrides): Promise<void>;

    initialize(_chef: string, _rewardToken: string, overrides?: CallOverrides): Promise<void>;

    isApprovedForAll(account: string, operator: string, overrides?: CallOverrides): Promise<boolean>;

    lpBalanceToCollSize(collId: BigNumberish, balance: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    mint(pid: BigNumberish, amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    rewardToken(overrides?: CallOverrides): Promise<string>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;

    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;

    setApprovalForAll(operator: string, approved: boolean, overrides?: CallOverrides): Promise<void>;

    setDedicatedWorkers(workers: string[], ok: boolean, overrides?: CallOverrides): Promise<void>;

    setDexHelper(helper: string, overrides?: CallOverrides): Promise<void>;

    stake(pid: BigNumberish, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    totalSupply(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;

    uri(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    'ApprovalForAll(address,address,bool)'(
      account?: string | null,
      operator?: string | null,
      approved?: null,
    ): ApprovalForAllEventFilter;
    ApprovalForAll(account?: string | null, operator?: string | null, approved?: null): ApprovalForAllEventFilter;

    'Burn(uint256,uint256,uint256)'(pid?: BigNumberish | null, collAmount?: null, lpAmount?: null): BurnEventFilter;
    Burn(pid?: BigNumberish | null, collAmount?: null, lpAmount?: null): BurnEventFilter;

    'Harvest(uint256,uint256)'(pid?: BigNumberish | null, rewardAmount?: null): HarvestEventFilter;
    Harvest(pid?: BigNumberish | null, rewardAmount?: null): HarvestEventFilter;

    'Mint(uint256,uint256,uint256)'(pid?: BigNumberish | null, collAmount?: null, lpAmount?: null): MintEventFilter;
    Mint(pid?: BigNumberish | null, collAmount?: null, lpAmount?: null): MintEventFilter;

    'OwnershipTransferred(address,address)'(
      previousOwner?: string | null,
      newOwner?: string | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;

    'SetWorkers(address,bool)'(workers?: null, ok?: null): SetWorkersEventFilter;
    SetWorkers(workers?: null, ok?: null): SetWorkersEventFilter;

    'Stake(uint256,uint256)'(pid?: BigNumberish | null, lpAmount?: null): StakeEventFilter;
    Stake(pid?: BigNumberish | null, lpAmount?: null): StakeEventFilter;

    'TransferBatch(address,address,address,uint256[],uint256[])'(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      ids?: null,
      values?: null,
    ): TransferBatchEventFilter;
    TransferBatch(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      ids?: null,
      values?: null,
    ): TransferBatchEventFilter;

    'TransferSingle(address,address,address,uint256,uint256)'(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      id?: null,
      value?: null,
    ): TransferSingleEventFilter;
    TransferSingle(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      id?: null,
      value?: null,
    ): TransferSingleEventFilter;

    'URI(string,uint256)'(value?: null, id?: BigNumberish | null): URIEventFilter;
    URI(value?: null, id?: BigNumberish | null): URIEventFilter;
  };

  estimateGas: {
    balanceOf(account: string, id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    balanceOfBatch(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;

    burn(
      id: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    chef(overrides?: CallOverrides): Promise<BigNumber>;

    collSizeToLpBalance(collId: BigNumberish, collSize: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    decodeId(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    dedicatedWorkers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    dexHelper(overrides?: CallOverrides): Promise<BigNumber>;

    encodeId(pid: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    exists(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getDexHelper(overrides?: CallOverrides): Promise<BigNumber>;

    getTokenByPid(pid: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getUnderlyingToken(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    harvestReward(pid: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    initialize(
      _chef: string,
      _rewardToken: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    isApprovedForAll(account: string, operator: string, overrides?: CallOverrides): Promise<BigNumber>;

    lpBalanceToCollSize(collId: BigNumberish, balance: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      pid: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    rewardToken(overrides?: CallOverrides): Promise<BigNumber>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setDedicatedWorkers(
      workers: string[],
      ok: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setDexHelper(helper: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    stake(
      pid: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    uri(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceOf(account: string, id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    balanceOfBatch(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;

    burn(
      id: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    chef(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    collSizeToLpBalance(
      collId: BigNumberish,
      collSize: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    decodeId(id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    dedicatedWorkers(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    dexHelper(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    encodeId(pid: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    exists(id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDexHelper(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTokenByPid(pid: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getUnderlyingToken(id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    harvestReward(
      pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    initialize(
      _chef: string,
      _rewardToken: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    isApprovedForAll(account: string, operator: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lpBalanceToCollSize(
      collId: BigNumberish,
      balance: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    mint(
      pid: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    rewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setDedicatedWorkers(
      workers: string[],
      ok: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setDexHelper(
      helper: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    stake(
      pid: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    uri(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}