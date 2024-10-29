import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';
import { Order } from './orderEntity';
import { Product } from './productEntity'; // Import Product entity

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

  @ManyToOne(() => Order, (order) => order.orderItems, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @ManyToOne(() => Product) 
  @JoinColumn({ name: 'product_id' }) 
  product: Product;
}
