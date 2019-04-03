import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from 'typeorm';
import { User } from '../users/user.entity'
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class Ledger {
  @PrimaryGeneratedColumn()
  @ApiModelProperty()
  id: number;

  @Column()
  @ApiModelProperty()
  title: string;

  @OneToOne(type => User)
  @JoinColumn()
  @ApiModelProperty()
  user: User;
}