import { Dex } from 'src/types';

export enum DEX {
  AERODROME = 'Aerodrome',
  UNISWAP = 'Uniswap',
}

export const dexes: { [chainId: string]: { [dexName: string]: Dex } } = {
  '8453': {
    Aerodrome: {
      name: 'Aerodrome',
      router: '0xcF77a3Ba9A5CA399B7c97c74d54e5b1Beb874E43',
      factory: '0x420DD381b31aEf6683db6B902084cB0FFECe40Da',
      chainId: '8453',
    },
    Uniswap: {
      name: 'UniswapV3',
      router: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
      factory: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
      chainId: '8453',
    },
  },
};
