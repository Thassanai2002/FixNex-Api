import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Trainer } from 'src/Entity/trainerEntity';

@Injectable()
export class TrainerService {
  constructor(
    @InjectRepository(Trainer)
    private readonly trainerRepository: Repository<Trainer>,
  ) { }

  findAll(): Promise<Trainer[]> {
    return this.trainerRepository.find();
  }

  findOne(trainer_id: number): Promise<Trainer> {
    return this.trainerRepository.findOneBy({ trainer_id });
  }

  create(ProgramEnrollments: Trainer): Promise<Trainer> {
    return this.trainerRepository.save(ProgramEnrollments);
  }


  delete(trainer_id: number): Promise<Trainer> {
    return this.trainerRepository.delete(trainer_id).then(() => {
      return this.findOne(trainer_id);
    });
  }

  deleteAll(): void {
    this.trainerRepository.clear();
}


  async update(trainer_id: number, update: Partial<Trainer>): Promise<Trainer> {
    await this.trainerRepository.update(trainer_id, update); // อัปเดตข้อมูล
    return this.trainerRepository.findOneBy({ trainer_id }); // คืนค่าข้อมูลผู้ใช้ที่อัปเดต
  }
}
