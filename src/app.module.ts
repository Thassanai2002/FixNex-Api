import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './Entity/userEntity';
import { Product } from './Entity/productEntity';
import { UserService } from './Repository/userRepository';
import { UserController } from './Controller/userController';
import { ProductController } from './Controller/productController';
import { ProductService } from './Repository/productRepository';
import { Order } from './Entity/orderEntity';
import { OrderController } from './Controller/orderController';
import { OrderService } from './Repository/orderRepository';
import { OrderItem } from './Entity/orderItemEntity';
import { OrderItemController } from './Controller/orderItemController';
import { OrderItemService } from './Repository/orderItemRepository';
import { Trainer } from './Entity/trainerEntity';
import { TrainerController } from './Controller/trainerController';
import { TrainerService } from './Repository/trainerRepository';
import { TrainerRantals } from './Entity/trainerRantalsEntity';
import { TrainerRantalsService } from './Repository/trainerRantalsRepository';
import { TrainerRantalsController } from './Controller/trainerRantalsController';
import { UserSpendingController } from './Controller/userSpendingController';
import { UserSpendingService } from './Repository/userSpendingRepository';
import { UserSpending } from './Entity/userSpendingEntity';
import { programsEnrollments } from './Entity/programsEnrollmentsEntity';
import { ProgramsEnrollmentsController } from './Controller/programsEnrollmentsController';
import { ProgramsEnrollmentsService } from './Repository/programsEnrollmentsRepository';
import { serviceAll } from './Service/Service';
import { TrainingProgram } from './Entity/trainingProgramsEntity';
import { TrainingProgramController } from './Controller/trainingProgramsController';
import { TrainingProgramService } from './Repository/trainingProgramsRepository';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      // host: '10.0.0.94',
      // port: 3306,
      // username: 'jackky',
      // password: 'jackky',
      // database: 'fitnex',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'fitnex',
      entities: [
        User,
        Product,
        Order,
        OrderItem,
        Trainer,
        TrainerRantals,
        UserSpending,
        programsEnrollments,
        TrainingProgram
      ],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([
      User,
      Product,
      Order,
      OrderItem,
      Trainer,
      TrainerRantals,
      UserSpending,
      programsEnrollments,
      TrainingProgram
    ]),
  ],
  controllers: [
    UserController,
    ProductController,
    OrderController,
    OrderItemController,
    TrainerController,
    TrainerRantalsController,
    UserSpendingController,
    ProgramsEnrollmentsController,
    TrainingProgramController
  ],
  providers: [
    UserService,
    ProductService,
    OrderService,
    OrderItemService,
    TrainerService,
    TrainerRantalsService,
    UserSpendingService,
    ProgramsEnrollmentsService,
    serviceAll,
    TrainingProgramService
  ],
})
export class AppModule {}
