import { Module, DynamicModule, Provider } from '@nestjs/common';
import { ethers } from 'ethers';
import { ProviderParam } from 'src/types';

@Module({})
export class Web3Module {
  static forRoot(providerParams: ProviderParam[]): DynamicModule {
    const providers: Provider[] = providerParams.map((param) => {
      const provider = new ethers.JsonRpcProvider(param.url);

      return {
        provide: param.provide,
        useFactory: () => {
          return provider;
        },
      };
    });

    return {
      module: Web3Module,
      providers,
      exports: providers.map((provider: any) => provider.provide),
    };
  }
}
