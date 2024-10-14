import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
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
  
  @OneToMany(() => OrderItem, (oder) => oder.orderItem)
  oders: OrderItem[];
}
