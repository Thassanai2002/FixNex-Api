import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { Trainer } from 'src/Entity/trainerEntity';
import { TrainerService } from 'src/Repository/trainerRepository';

@Controller('Trainer')
export class TrainerController {
  constructor(private readonly trainerService: TrainerService) {}

  @Get()
  findAll(): Promise<Trainer[]> {
    return this.trainerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Trainer> {
    return this.trainerService.findOne(+id);
  }

  @Post()
  create(@Body() user: Trainer): Promise<Trainer> {
    return this.trainerService.create(user);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<Trainer> {
    return this.trainerService.delete(+id);
  }

  @Delete()
  DeleteAll(): void {
    this.trainerService.deleteAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() user: Partial<Trainer>): Promise<Trainer> {
    return this.trainerService.update(+id, user);
  }
}
