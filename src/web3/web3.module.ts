import { Module, DynamicModule, Provider } from '@nestjs/common';
import { parseChainId } from 'src/util/parser';
import { ethers } from 'ethers';

@Module({})
export class Web3Module {
  static forRoot(): DynamicModule {
    const chainIds = parseChainId(process.env.CHAIN_ID);
    const tokens = chainIds.map((chainId) => `Provider${chainId}`);

    const rpc_urls: { [chainId: string]: string } = {};
    chainIds.reduce((obj, chainId) => {
      rpc_urls[chainId] = process.env[`RPC_URL_${chainId}`];
      return obj;
    }, {});

    const providers: Provider[] = chainIds.map((chainId) => {
      return {
        provide: `Provider${chainId}`,
        useFactory: () => {
          return new ethers.JsonRpcProvider(rpc_urls[chainId]);
        },
      };
    });
    return {
      module: Web3Module,
      providers,
      exports: tokens,
    };
  }
}