import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LedgersController } from './ledgers.controller';
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
    ],
  providers: [
    LedgersService,
    TransactionsService,
    LedgersRepository,
    TransactionsRepository
  ],
  controllers: [LedgersController],
})
export class LedgersModule {}