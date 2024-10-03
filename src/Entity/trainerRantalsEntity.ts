import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TrainerRantals {
  @PrimaryGeneratedColumn()
  rental_id: number;

  @Column()
  user_id: number; // FK from user

  @Column()
   trainer_id: number; // FK from trainer

   @Column()
   rental_date: Date;

   @Column()
   duration: number;

}