import { Injectable } from '@nestjs/common';
import { UserService } from 'src/Repository/userRepository';
import { TrainerRantalsService } from 'src/Repository/trainerRantalsRepository';
import { ProgramsEnrollmentsService } from 'src/Repository/programsEnrollmentsRepository';
@Injectable()
export class serviceAll {
  constructor(
    private readonly userService: UserService,
    private readonly trainerRantalsService: TrainerRantalsService,
    private readonly programsEnrollmentsService: ProgramsEnrollmentsService
  ) {}

  async findTrainerUserProgamsEnrollments(id: number): Promise<any> {
    const user = await this.userService.findOne(id);
    const rentals = await this.trainerRantalsService.findRentalsWithTrainerName(id);
    const enrollments = await this.programsEnrollmentsService.findRentalsWithTrainerName(id)
    return { user, rentals, enrollments};
  }
}
