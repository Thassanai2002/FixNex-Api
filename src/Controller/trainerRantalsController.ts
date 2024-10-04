import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { Trainer } from 'src/Entity/trainerEntity';
import { TrainerRantals } from 'src/Entity/trainerRantalsEntity';
import { TrainerRantalsService } from 'src/Repository/trainerRantalsRepository';

@Controller('TrainerRantals')
export class TrainerRantalsController {
  constructor(private readonly trainerRantalsService: TrainerRantalsService) {}

  @Get()
  findAll(): Promise<TrainerRantals[]> {
    return this.trainerRantalsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<TrainerRantals> {
    return this.trainerRantalsService.findOne(+id);
  }

  @Post()
  create(@Body() user: TrainerRantals): Promise<TrainerRantals> {
    return this.trainerRantalsService.create(user);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<TrainerRantals> {
    return this.trainerRantalsService.delete(+id);
  }

  @Delete()
  DeleteAll(): void {
    this.trainerRantalsService.deleteAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() user: Partial<TrainerRantals>): Promise<TrainerRantals> {
    return this.trainerRantalsService.update(+id, user);
  }
}
