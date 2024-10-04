import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { TrainingProgram } from 'src/Entity/trainingProgramsEntity';
import { TrainingProgramService } from 'src/Repository/trainingProgramsRepository';

@Controller('TrainingProgram')
export class TrainingProgramController {
  constructor(private readonly trainingProgramService: TrainingProgramService) {}

  @Get()
  findAll(): Promise<TrainingProgram[]> {
    return this.trainingProgramService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<TrainingProgram> {
    return this.trainingProgramService.findOne(+id);
  }

  @Post()
  create(@Body() user: TrainingProgram): Promise<TrainingProgram> {
    return this.trainingProgramService.create(user);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<TrainingProgram> {
    return this.trainingProgramService.delete(+id);
  }

  @Delete()
  DeleteAll(): void {
    this.trainingProgramService.deleteAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() user: Partial<TrainingProgram>): Promise<TrainingProgram> {
    return this.trainingProgramService.update(+id, user);
  }
}
