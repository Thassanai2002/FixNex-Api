import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';
import { Trainer } from './trainerEntity';

@Entity()
export class TrainerRantals {
  @PrimaryGeneratedColumn()
  rental_id: number;

  @Column()
  user_id: number; // FK from user

  @Column()
  trainer_id: number; // FK from trainer

  @ManyToOne(() => Trainer) // กำหนดความสัมพันธ์กับ Trainer
  @JoinColumn({ name: 'trainer_id' }) // เชื่อมโยงกับ trainer_id
  trainer: Trainer;

  @Column()
  rental_date: string;

  @Column()
  duration: number;
}
