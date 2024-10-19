import { Injectable } from '@nestjs/common';
import { UserService } from 'src/Repository/userRepository';
import { TrainerRantalsService } from 'src/Repository/trainerRantalsRepository';
import { ProgramsEnrollmentsService } from 'src/Repository/programsEnrollmentsRepository';
import { OrderService } from 'src/Repository/orderRepository';
@Injectable()
export class serviceAll {
  constructor(
    private readonly userService: UserService,
    private readonly trainerRantalsService: TrainerRantalsService,
    private readonly programsEnrollmentsService: ProgramsEnrollmentsService,
    private readonly orderService: OrderService
  ) {}

  async findTrainerUserProgamsEnrollments(id: number): Promise<any> {
    const user = await this.userService.findOne(id);
    const rentals = await this.trainerRantalsService.findRentalsWithTrainerName(id);
    const enrollments = await this.programsEnrollmentsService.findEnrollmentssWithProgramName(id)
    const orders = await this.orderService.findOrdersWithOrderid(id)
    return { user, rentals, enrollments, orders };
  }
}
