import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Web3Module } from './web3/web3.module';

@Module({
  imports: [ConfigModule.forRoot(), Web3Module.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
