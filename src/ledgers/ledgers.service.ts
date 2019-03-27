import { Injectable } from '@nestjs/common';
import { LedgersRepository } from './ledgers.repository';
import { Ledger } from './ledger.entity';

@Injectable()
export class LedgersService {
    constructor(private readonly ledgersRepository: LedgersRepository) {}

    async list(): Promise<Array<Ledger>> {
        const ledgers: Array<Ledger> = await this.ledgersRepository.find({ relations: ["user"] });
        return ledgers
      }
    
      async get(id: number): Promise<Ledger> {
        const ledger: Ledger = await this.ledgersRepository.findOne(id, { relations: ["user"] });
        return ledger
      }
    
      async create(ledger: Ledger): Promise<Ledger> {
        const createdLedger: Ledger = await this.ledgersRepository.save(ledger);
        return createdLedger
      }
    
      async update(ledger: Ledger): Promise<Ledger> {
        const updatedLedger: Ledger = await this.ledgersRepository.save(ledger);
        return updatedLedger
      }
    
      async delete(id: number): Promise<Ledger> {
        const ledger: Ledger = await this.ledgersRepository.findOne(id);
        await this.ledgersRepository.remove(ledger);
        return ledger;
      }
}
