import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TrainingProgram } from 'src/Entity/trainingProgramsEntity';
import { Repository } from 'typeorm';


@Injectable()
export class TrainingProgramService {
  constructor(
    @InjectRepository(TrainingProgram)
    private readonly trainingProgramRepository: Repository<TrainingProgram>,
  ) { }

  findAll(): Promise<TrainingProgram[]> {
    return this.trainingProgramRepository.find();
  }

  findOne(program_id: number): Promise<TrainingProgram> {
    return this.trainingProgramRepository.findOneBy({ program_id });
  }

  create(user: TrainingProgram): Promise<TrainingProgram> {
    return this.trainingProgramRepository.save(user);
  }


  delete(program_id: number): Promise<TrainingProgram> {
    return this.trainingProgramRepository.delete(program_id).then(() => {
      return this.findOne(program_id);
    });
  }

  deleteAll(): void {
    this.trainingProgramRepository.clear();
}


  async update(program_id: number, updateData: Partial<TrainingProgram>): Promise<TrainingProgram> {
    await this.trainingProgramRepository.update(program_id, updateData); // อัปเดตข้อมูล
    return this.trainingProgramRepository.findOneBy({ program_id }); // คืนค่าข้อมูลผู้ใช้ที่อัปเดต
  }
}
