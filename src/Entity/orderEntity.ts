import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

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
}
