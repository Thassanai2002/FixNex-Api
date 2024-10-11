import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { programsEnrollments } from 'src/Entity/programsEnrollmentsEntity';
import { Repository } from 'typeorm';


@Injectable()
export class ProgramsEnrollmentsService {
  constructor(
    @InjectRepository(programsEnrollments)
    private readonly programsEnrollmentsRepository: Repository<programsEnrollments>,
  ) { }

  findAll(): Promise<programsEnrollments[]> {
    return this.programsEnrollmentsRepository.find();
  }

  findOne(user_id: number): Promise<programsEnrollments> {
    return this.programsEnrollmentsRepository.findOneBy({ user_id });
  }

  create(user: programsEnrollments): Promise<programsEnrollments> {
    return this.programsEnrollmentsRepository.save(user);
  }


  delete(user_id: number): Promise<programsEnrollments> {
    return this.programsEnrollmentsRepository.delete(user_id).then(() => {
      return this.findOne(user_id);
    });
  }

  deleteAll(): void {
    this.programsEnrollmentsRepository.clear();
}


  async update(user_id: number, updateData: Partial<programsEnrollments>): Promise<programsEnrollments> {
    await this.programsEnrollmentsRepository.update(user_id, updateData); // อัปเดตข้อมูล
    return this.programsEnrollmentsRepository.findOneBy({ user_id }); // คืนค่าข้อมูลผู้ใช้ที่อัปเดต
  }
}