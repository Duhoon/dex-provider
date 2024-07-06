import { DynamicModule, Module, Provider } from '@nestjs/common';
import { Web3Module } from 'src/web3/web3.module';
import { dexes } from 'src/constant/dexes';
import { JsonRpcProvider, ethers } from 'ethers';
import { DexMetadata } from 'src/types';

import * as FactoryV2ABI from './v2/FactoryV2ABI.json';
import * as RouterV2ABI from './v2/RouterV2ABI.json';
import * as FactoryV3ABI from './v3/FactoryV3ABI.json';
import * as RouterV3ABI from './v3/RouterV3ABI.json';
import * as PoolAeroABI from './aerodrome/PoolAeroABI.json';
import * as RouterAeroABI from './aerodrome/RouterAeroABI.json';

@Module({})
export class DEXModule {
  static forRoot(dexMetadatas: DexMetadata[]): DynamicModule {
    const providers: Provider[] = dexMetadatas
      .map((md) => {
        const dex = dexes[md.chainId][md.name];
        return [
          {
            provide: `${dex.name}Router`,
            useFactory: (provider: JsonRpcProvider) => {
              return new ethers.Contract(
                dex.router,
                md.version.toUpperCase() === 'V2'
                  ? RouterV2ABI
                  : md.version.toUpperCase() === 'V3'
                    ? RouterV3ABI
                    : RouterAeroABI,
                provider,
              );
            },
            inject: [`Provider${md.chainId}`],
          },
          {
            provide: `${dex.name}Factory`,
            useFactory: (provider: JsonRpcProvider) => {
              return new ethers.Contract(
                dex.factory,
                md.version.toUpperCase() === 'V2'
                  ? FactoryV2ABI
                  : md.version.toUpperCase() === 'V3'
                    ? FactoryV3ABI
                    : PoolAeroABI,
                provider,
              );
            },
            inject: [`Provider${md.chainId}`],
          },
        ];
      })
      .flat();

    return {
      module: DEXModule,
      imports: [Web3Module.forRoot()],
      providers,
      exports: providers.map((provider: any) => provider.provide),
    };
  }
}
