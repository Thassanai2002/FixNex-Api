import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { OrderItem } from './orderItemEntity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  order_id: number;

  @Column()
  user_id: number;

  @Column()
  oder_date: Date;

  @Column()
  total_amount: number;

  @Column()
  status: string;

  // ตั้งค่า cascade deletion ใน orderItems
  @OneToMany(() => OrderItem, (orderItem) => orderItem.order, {
    cascade: true,
  })
  orderItems: OrderItem[];
}

