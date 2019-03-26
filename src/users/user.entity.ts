import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsNotEmpty } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  @IsNotEmpty()
  name: string;

  @Column({ length: 60 })
  @IsEmail()
  email: string;

  @Column()
  @IsNotEmpty()
  password: string;
}