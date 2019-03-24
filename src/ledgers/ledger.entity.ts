import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from 'typeorm';
import { User } from '../users/user.entity'

@Entity()
export class Ledger {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToOne(type => User)
  @JoinColumn()
  user: User;
}