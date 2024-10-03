import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Order } from 'src/Entity/orderEntity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  user_name: string;

  @Column({ nullable: true }) // ทำให้ email สามารถรับค่า null ได้
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true }) // ทำให้ email สามารถรับค่า null ได้
  phone: string;

  @Column()
  vip_level: string;

  @Column()
  join_date: Date;


}
