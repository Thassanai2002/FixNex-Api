import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { User } from 'src/Entity/userEntity';
import { UserService } from 'src/Repository/userRepository';
import { serviceAll } from 'src/Service/Service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService, private readonly serviceAll: serviceAll) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string): Promise<User> {
  //   return this.userService.findOne(+id);
  // }

@Get(':id')
async findTrainerUserProgamsEnrollments(@Param('id') id: number): Promise<any> {
  return await this.serviceAll.findTrainerUserProgamsEnrollments(+id);
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
