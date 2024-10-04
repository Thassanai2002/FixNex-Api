import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { UserSpending } from 'src/Entity/userSpendingEntity';
import { UserSpendingService } from 'src/Repository/userSpendingRepository';

@Controller('userSpending')
export class UserSpendingController {
  constructor(private readonly userSpendingService: UserSpendingService) {}

  @Get()
  findAll(): Promise<UserSpending[]> {
    return this.userSpendingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<UserSpending> {
    return this.userSpendingService.findOne(+id);
  }

  @Post()
  create(@Body() user: UserSpending): Promise<UserSpending> {
    return this.userSpendingService.create(user);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<UserSpending> {
    return this.userSpendingService.delete(+id);
  }

  @Delete()
  DeleteAll(): void {
    this.userSpendingService.deleteAll();
  }

  @Patch(':id')
  update(@Param('id') user_id: string, @Body() user: Partial<UserSpending>): Promise<UserSpending> {
    return this.userSpendingService.update(+user_id, user);
  }
}
