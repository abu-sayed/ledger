import { Injectable } from '@nestjs/common';
import { LedgersRepository } from './ledgers.repository';
import { Ledger } from './ledger.entity';

@Injectable()
export class LedgersService {
    constructor(private readonly ledgersRepository: LedgersRepository) {}

    async getLedgerById(id: number): Promise<Ledger> {
        return await this.ledgersRepository.findOne(id);
    }
}
