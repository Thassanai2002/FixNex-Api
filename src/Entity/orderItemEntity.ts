import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}