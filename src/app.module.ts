import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './Entity/userEntity';
import { Product } from './Entity/productEntity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '10.0.0.94',  // ใส่ host ของคุณ
      port: 3306,         // พอร์ตของ MySQL
      username: 'jackky',  // ชื่อผู้ใช้งาน MySQL
      password: 'jackky',  // รหัสผ่านของ MySQL
      database: 'fitnex',  // ชื่อฐานข้อมูล
      entities: [User,Product],  // ระบุตำแหน่งไฟล์ entity
      synchronize: true,  // ถ้า true จะสร้างตารางตาม entity อัตโนมัติ (สำหรับ dev)
    }),
  ],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
