import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/Entity/userEntity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(user_id: number): Promise<User> {
    return this.userRepository.findOneBy({ user_id });
  }

  findOneByuser_name(user_name: string): Promise<User> {
    return this.userRepository.findOneBy({ user_name });
  }

  async checkUserExists(user_name: string): Promise<boolean> {
    const user = await this.userRepository.findOne({
      where: { user_name }
    });
    return !!user;
  }

  async create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  delete(user_id: number): Promise<User> {
    return this.userRepository.delete(user_id).then(() => {
      return this.findOne(user_id);
    });
  }

  deleteAll(): void {
    this.userRepository.clear();
  }

  async update(user_id: number, updateData: Partial<User>): Promise<User> {
    await this.userRepository.update(user_id, updateData);
    return this.userRepository.findOneBy({ user_id });
  }
}
