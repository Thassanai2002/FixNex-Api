import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  ConflictException,
} from '@nestjs/common';
import { User } from 'src/Entity/userEntity';
import { UserService } from 'src/Repository/userRepository';
import { serviceAll } from 'src/Service/Service';

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly serviceAll: serviceAll,
  ) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findTrainerUserProgamsEnrollments(
    @Param('id') id: number,
  ): Promise<any> {
    return await this.serviceAll.findTrainerUserProgamsEnrollments(+id);
  }

  @Post()
  async create(@Body() user: User): Promise<User> {
    const userExists = await this.userService.checkUserExists(
      user.user_name,
      user.phone,
      user.email,
    );
    if (userExists) {
      throw new ConflictException('User name, phone, or email already exists!'); // ยกเว้นข้อผิดพลาด
    }
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
  update(
    @Param('id') user_id: string,
    @Body() user: Partial<User>,
  ): Promise<User> {
    return this.userService.update(+user_id, user);
  }
}
