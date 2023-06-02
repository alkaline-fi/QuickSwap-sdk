import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  MUMBAI = 80001,
  MATIC = 137,
  DOGETESTNET = 568,
  DOGECHAIN = 2000,
  ZKTESTNET = 1442,
  ZK_EVM = 1101,
  ZKSYNCERA = 324,
  ZKSYNCALPHA = 280,
  LINEATEST = 59140,
  LINEAMAIN = 73927
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS = {
  [ChainId.MAINNET]: '0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32',
  [ChainId.MATIC]: '0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32',
  [ChainId.DOGECHAIN]: '0xC3550497E591Ac6ed7a7E03ffC711CfB7412E57F',
  [ChainId.MUMBAI]: '0xC3550497E591Ac6ed7a7E03ffC711CfB7412E57F', //CHANGE THIS
  [ChainId.ZK_EVM]: '0xC3550497E591Ac6ed7a7E03ffC711CfB7412E57F', //CHANGE THIS
  [ChainId.ZKTESTNET]: '0xC3550497E591Ac6ed7a7E03ffC711CfB7412E57F', //CHANGE THIS
  [ChainId.DOGETESTNET]: '0xC3550497E591Ac6ed7a7E03ffC711CfB7412E57F', //CHANGE THIS
  [ChainId.ZKSYNCALPHA]: '0xC3550497E591Ac6ed7a7E03ffC711CfB7412E57F', //CHANGE THIS
  [ChainId.ZKSYNCERA]: '0xC3550497E591Ac6ed7a7E03ffC711CfB7412E57F', //CHANGE THIS
  [ChainId.LINEATEST]: '0xC3550497E591Ac6ed7a7E03ffC711CfB7412E57F', //CHANGE THIS
  [ChainId.LINEAMAIN]: '0xC3550497E591Ac6ed7a7E03ffC711CfB7412E57F' //CHANGE THIS
}

export const INIT_CODE_HASH = '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
