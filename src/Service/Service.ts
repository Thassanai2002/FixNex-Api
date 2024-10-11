import { Injectable } from '@nestjs/common';
import { UserService } from 'src/Repository/userRepository';
import { TrainerRantalsService } from 'src/Repository/trainerRantalsRepository';

@Injectable()
export class serviceAll {
  constructor(
    private readonly userService: UserService,
    private readonly trainerRantalsService: TrainerRantalsService,
  ) {}

  async findTrainerUserProgamsEnrollments(id: number): Promise<any> {
    const user = await this.userService.findOne(id);
    const rental = await this.trainerRantalsService.findBy(id);
    return { user, rental };
  }
}
