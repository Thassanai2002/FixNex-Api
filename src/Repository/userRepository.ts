import { Injectable } from '@nestjs/common';
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

  create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }
}
