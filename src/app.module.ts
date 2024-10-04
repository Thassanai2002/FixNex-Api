// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from './Entity/userEntity';
// import { Product } from './Entity/productEntity';

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'mysql',
//       host: '10.0.0.94',  // ใส่ host ของคุณ
//       port: 3306,         // พอร์ตของ MySQL
//       username: 'jackky',  // ชื่อผู้ใช้งาน MySQL
//       password: 'jackky',  // รหัสผ่านของ MySQL
//       database: 'fitnex',  // ชื่อฐานข้อมูล
//       entities: [User,Product],  // ระบุตำแหน่งไฟล์ entity
//       synchronize: true,  // ถ้า true จะสร้างตารางตาม entity อัตโนมัติ (สำหรับ dev)
//     }),
//   ],
  
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
      // นำเข้า UserService
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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '10.0.0.94',
      port: 3306,
      username: 'jackky',
      password: 'jackky',
      database: 'fitnex',
      entities: [
        User,
        Product,
        Order,
        OrderItem,
        Trainer,
        TrainerRantals,
        UserSpending
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
      UserSpending
    ]),
  ],
  controllers: [
    UserController,
    ProductController,
    OrderController,
    OrderItemController,
    TrainerController,
    TrainerRantalsController,
    UserSpendingController
  ],
  providers: [
    UserService,
    ProductService,
    OrderService,
    OrderItemService,
    TrainerService,
    TrainerRantalsService,
    UserSpendingService
  ],
})
export class AppModule {}
