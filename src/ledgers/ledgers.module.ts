import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LedgersControllerV1 } from './ledgers.controller.v1';
import { LedgersService } from './ledgers.service';
import { TransactionsService } from './transactions.service';
import { LedgersRepository } from './ledgers.repository';
import { TransactionsRepository } from './transactions.repository';
import { Ledger } from './ledger.entity';
import { Transaction } from './transaction.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([Ledger]),
      TypeOrmModule.forFeature([Transaction]),
      TypeOrmModule.forFeature([LedgersRepository]),
      TypeOrmModule.forFeature([TransactionsRepository]),
    ],
  providers: [
    LedgersService,
    TransactionsService,
  ],
  controllers: [LedgersControllerV1],
})
export class LedgersModule {}