import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) { }

  async getUserById(id: number): Promise<User> {
    const user: User = await this.usersRepository.findOne(id);
    delete user['password'];
    return user
  }

  async createUser(user: User): Promise<User> {
    const createdUser: User = await this.usersRepository.save(user);
    delete createdUser['password'];
    return createdUser
  }

  async updateUser(user: User): Promise<User> {
    const updatedUser: User = await this.usersRepository.save(user);
    delete updatedUser['password'];
    return updatedUser
  }
}