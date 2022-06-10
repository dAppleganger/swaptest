import JSBI from 'jsbi'

enum SupportedChainId {
  MAINNET = 56,
  TESTNET = 97,
}

export const FACTORY_ADDRESS: { [chainId: number]: string } = {
  [SupportedChainId.MAINNET]: '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73',
  [SupportedChainId.TESTNET]: '0x6725F303b657a9451d8BA641348b6761A6CC7a17',
}

export const INIT_CODE_HASH: { [chainId: number]: string } = {
  [SupportedChainId.MAINNET]: '0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5',
  [SupportedChainId.TESTNET]: '0xd0d4c4cd0848c93cb4fd1f498d7013ee6bfb25783ea21593d5834f5d250ece66',
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)
