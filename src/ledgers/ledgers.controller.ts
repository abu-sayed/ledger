import { Controller, Get, Param } from '@nestjs/common';
import { LedgersService } from './ledgers.service';
import { Ledger } from './ledger.entity';

@Controller('ledgers')
export class LedgersController {
  constructor(private readonly ledgersService: LedgersService) {}

  @Get(':id')
  async getLedgerById(@Param('id') id: number): Promise<Ledger> {
    return await this.ledgersService.getLedgerById(id);
  }
}
