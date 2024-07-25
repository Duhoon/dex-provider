import { Injectable } from '@nestjs/common';
import { TokenContract } from './token.contract';
import { Token } from 'src/types';
import { JsonRpcApiProvider } from 'ethers';

@Injectable()
export class TokenRegistry {
  tokenByAddress: { [chainId: string]: { [address: string]: TokenContract } } =
    {};
  tokenBySymbol: { [chainId: string]: { [symbol: string]: TokenContract } } =
    {};

  register(token: Token, chainId: string, provider: JsonRpcApiProvider) {
    const tokenContract = new TokenContract(token, provider);

    this.tokenByAddress[chainId][token.address] = tokenContract;
    this.tokenBySymbol[chainId][token.symbol] = tokenContract;
  }

  getTokenByAddress(address: string, chainId: string): TokenContract {
    return this.tokenByAddress[chainId][address];
  }

  getTokenBySymbol(symbol: string, chainId: string): TokenContract {
    return this.tokenBySymbol[chainId][symbol];
  }
}
