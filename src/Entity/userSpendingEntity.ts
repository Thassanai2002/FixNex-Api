import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserSpending {
  @PrimaryGeneratedColumn()
  spending_id: number;

  @Column()
  user_id: number; // FK from user

  @Column()
   total_spending: number; 

   @Column()
   last_purchas_date: Date;

}