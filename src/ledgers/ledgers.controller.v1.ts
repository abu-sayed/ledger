import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { LedgersService } from './ledgers.service';
import { Ledger } from './ledger.entity';

@Controller('v1/ledgers')
export class LedgersControllerV1 {
  constructor(private readonly ledgersService: LedgersService) {}

  @Get()
  async list(): Promise<Array<Ledger>> {
    return await this.ledgersService.list();
  }

  @Get(':id')
  async get(@Param('id') id: number): Promise<Ledger> {
    return await this.ledgersService.get(id);
  }

  @Post()
  async create(@Body() ledger: Ledger): Promise<Ledger> {
    return await this.ledgersService.create(ledger);
  }

  @Put(':id')
  async update(@Body() ledger: Ledger, @Param('id', new ParseIntPipe()) id: number): Promise<Ledger> {
    ledger.id = id;
    return await this.ledgersService.update(ledger);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<Ledger> {
    return await this.ledgersService.delete(id);
  }
}
