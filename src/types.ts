import { JsonRpcApiProviderOptions, Networkish } from 'ethers';

export interface ProviderParam {
  provide: string;
  url: string;
  networkish?: Networkish;
  options?: JsonRpcApiProviderOptions;
}

export interface Token {
  name: string;
  symbol: string;
  ex_symbol: string;
  address: string;
}

export interface Dex {
  name: string;
  router: string;
  factory: string;
  chainId: string;
}

export interface DexMetadata {
  name: string;
  version: 'V2' | 'v2' | 'V3' | 'v3' | 'Aerodrome';
  chainId: string;
}
