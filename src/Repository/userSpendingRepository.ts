import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserSpending } from 'src/Entity/userSpendingEntity';
import { Repository } from 'typeorm';


@Injectable()
export class UserSpendingService {
  constructor(
    @InjectRepository(UserSpending)
    private readonly userSpendingRepository: Repository<UserSpending>,
  ) { }

  findAll(): Promise<UserSpending[]> {
    return this.userSpendingRepository.find();
  }

  findOne(user_id: number): Promise<UserSpending> {
    return this.userSpendingRepository.findOneBy({ user_id });
  }

  create(user: UserSpending): Promise<UserSpending> {
    return this.userSpendingRepository.save(user);
  }


  delete(user_id: number): Promise<UserSpending> {
    return this.userSpendingRepository.delete(user_id).then(() => {
      return this.findOne(user_id);
    });
  }

  deleteAll(): void {
    this.userSpendingRepository.clear();
}


  async update(spending_id: number, updateData: Partial<UserSpending>): Promise<UserSpending> {
    await this.userSpendingRepository.update(spending_id, updateData); // อัปเดตข้อมูล
    return this.userSpendingRepository.findOneBy({ spending_id }); // คืนค่าข้อมูลผู้ใช้ที่อัปเดต
  }
}
