import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Web3Module } from './web3/web3.module';
import { DEXModule } from './dex/dex.module';
import { DEX } from './constant/dexes';

@Module({
  imports: [
    ConfigModule.forRoot(),
    Web3Module.forRoot(),
    DEXModule.forRoot([
      {
        name: DEX.AERODROME,
        chainId: '8453',
        version: 'Aerodrome',
      },
      {
        name: DEX.UNISWAP,
        chainId: '8453',
        version: 'V2',
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
