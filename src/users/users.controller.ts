import { Controller, Get, Post, Put, Body, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  async getUserById(@Param('id') id: number): Promise<User> {
    return await this.usersService.getUserById(id);
  }

  @Post()
  async createUser(@Body() user: User): Promise<User> {
    return await this.usersService.createUser(user);
  }

  @Put(':id')
  async updateUser(@Body() user: User, @Param('id', new ParseIntPipe()) id: number): Promise<User> {
    user.id = id;
    return await this.usersService.updateUser(user);
  }
}
