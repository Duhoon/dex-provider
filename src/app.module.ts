import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Web3Module } from './web3/web3.module';

const bscProvider = 'bscProvider';

@Module({
  imports: [
    ConfigModule.forRoot(),
    Web3Module.forRoot([
      {
        provide: bscProvider,
        url: process.env.RPC_URL_BSC,
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
