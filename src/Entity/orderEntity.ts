import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/Entity/userEntity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  order_id: number;

  @ManyToOne(() => User, (user) => user.orders)
  user:User;

  @Column()
   oder_date: Date;

   @Column()
   total_amount: number;

   @Column()
   status: string;
}
