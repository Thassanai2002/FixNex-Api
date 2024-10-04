import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { User } from 'src/Entity/userEntity';
import { UserService } from 'src/Repository/userRepository';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(+id);
  }

  @Post()
  create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<User> {
    return this.userService.delete(+id);
  }

  @Delete()
  DeleteAll(): void {
    this.userService.deleteAll();
  }

  @Patch(':id')
  update(@Param('id') user_id: string, @Body() user: Partial<User>): Promise<User> {
    return this.userService.update(+user_id, user);
  }
}
