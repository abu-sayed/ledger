import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from 'typeorm';
import { Ledger } from './ledger.entity'

export enum TransactionType {
    DEBIT = "debit",
    CREDIT = "credit",
}

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "enum", enum: TransactionType })
  type: TransactionType;

  @Column('double')
  amount: number;

  @Column()
  particular: string;

  @OneToOne(type => Ledger)
  @JoinColumn()
  ledger: Ledger;
}