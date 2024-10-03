import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/Entity/userEntity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  order_id: number;

  @Column()
  userr_id: number;

  @Column()
   oder_date: Date;

   @Column()
   total_amount: number;

   @Column()
   status: string;
}
