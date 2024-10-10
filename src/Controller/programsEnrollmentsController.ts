import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { programsEnrollments } from 'src/Entity/programsEnrollmentsEntity';
import { ProgramsEnrollmentsService } from 'src/Repository/programsEnrollmentsRepository';

@Controller('programsEnrollments')
export class ProgramsEnrollmentsController {
  constructor(private readonly programsEnrollmentsService: ProgramsEnrollmentsService) {}

  @Get()
  findAll(): Promise<programsEnrollments[]> {
    return this.programsEnrollmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<programsEnrollments> {
    return this.programsEnrollmentsService.findOne(+id);
  }

  @Post()
  create(@Body() user: programsEnrollments): Promise<programsEnrollments> {
    return this.programsEnrollmentsService.create(user);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<programsEnrollments> {
    return this.programsEnrollmentsService.delete(+id);
  }

  @Delete()
  DeleteAll(): void {
    this.programsEnrollmentsService.deleteAll();
  }

  @Patch(':id')
  update(@Param('id') user_id: string, @Body() user: Partial<programsEnrollments>): Promise<programsEnrollments> {
    return this.programsEnrollmentsService.update(+user_id, user);
  }
}
