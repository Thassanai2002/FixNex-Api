import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  product_id: number;

  @Column()
  product_name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  category: string;

  @Column()
  stock_quantity: number;

  @Column()
  gain_muscle: string;

  @Column()
  increase_power: string;

  @Column()
  muscle_recovery: string;

  @Column()
  absorption_speed: string;

}
