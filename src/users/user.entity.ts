import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Exclude } from 'class-transformer';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @ApiModelProperty()
  id: number;

  @Column({ length: 100 })
  @IsNotEmpty()
  @ApiModelProperty()
  name: string;

  @Column({ length: 60 })
  @IsEmail()
  @ApiModelProperty()
  email: string;

  @Column()
  @IsNotEmpty()
  @ApiModelProperty()
  @Exclude({ toPlainOnly: true })
  password: string;
}