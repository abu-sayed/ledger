import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import * as util from 'util';

const hash = util.promisify(bcrypt.hash);

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) { }

  async list(): Promise<Array<User>> {
    const users: Array<User> = await this.usersRepository.find();
    return users
  }

  async get(id: number): Promise<User> {
    const user: User = await this.usersRepository.findOne(id);
    return user
  }

  async create(user: User): Promise<User> {
    user.password = await hash(user.password, 10);
    const createdUser: User = await this.usersRepository.save(user);
    return createdUser
  }

  async update(user: User): Promise<User> {
    const updatedUser: User = await this.usersRepository.save(user);
    return updatedUser
  }

  async delete(id: number): Promise<User> {
    const user: User = await this.usersRepository.findOne(id);
    await this.usersRepository.remove(user);
    return user;
  }
}