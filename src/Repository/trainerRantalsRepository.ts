import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Trainer } from 'src/Entity/trainerEntity';
import { TrainerRantals } from 'src/Entity/trainerRantalsEntity';

@Injectable()
export class TrainerRantalsService {
  constructor(
    @InjectRepository(TrainerRantals)
    private readonly trainerRantalsRepository: Repository<TrainerRantals>,
  ) { }

  findAll(): Promise<TrainerRantals[]> {
    return this.trainerRantalsRepository.find();
  }

  findOne(user_id: number): Promise<TrainerRantals> {
    return this.trainerRantalsRepository.findOneBy({ user_id });
  }

  findBy(user_id: number): Promise<TrainerRantals[]> {
    return this.trainerRantalsRepository.findBy({ user_id });
  }

  create(ProgramEnrollments: TrainerRantals): Promise<TrainerRantals> {
    return this.trainerRantalsRepository.save(ProgramEnrollments);
  }


  delete(rental_id: number): Promise<TrainerRantals> {
    return this.trainerRantalsRepository.delete(rental_id).then(() => {
      return this.findOne(rental_id);
    });
  }

  deleteAll(): void {
    this.trainerRantalsRepository.clear();
}


  async update(rental_id: number, update: Partial<TrainerRantals>): Promise<TrainerRantals> {
    await this.trainerRantalsRepository.update(rental_id, update); // อัปเดตข้อมูล
    return this.trainerRantalsRepository.findOneBy({ rental_id }); // คืนค่าข้อมูลผู้ใช้ที่อัปเดต
  }
}
