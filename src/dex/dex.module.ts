import { Module } from '@nestjs/common';
import { Web3Module } from 'src/web3/web3.module';

@Module({ imports: [Web3Module] })
export class DEXModule {}
