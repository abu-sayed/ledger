import { Repository, EntityRepository } from 'typeorm';
import { Ledger } from './ledger.entity'

@EntityRepository(Ledger)
export class LedgersRepository extends Repository<Ledger> {}
