import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { OrderItem } from './orderItemEntity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  order_id: number;

  @Column()
  user_id: number; // FK from user

  @Column()
  oder_date: Date;

  @Column()
  total_amount: number;

  @Column()
  status: string;

  // ความสัมพันธ์ระหว่าง Order และ OrderItem
  @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
  orderItems: OrderItem[];
}
