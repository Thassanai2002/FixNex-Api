import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';
import { Order } from './orderEntity';

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  order_item_id: number;

  @Column()
  order_id: number; // FK from order

  @Column()
  product_id: number; // FK from product

  @Column()
  quantity: number;

  @Column()
  price: number;

  @ManyToOne(() => Order) // กำหนดความสัมพันธ์กับ Trainer
  @JoinColumn({ name: 'order_id' }) // เชื่อมโยงกับ trainer_id
  orderItem: Order;
}
