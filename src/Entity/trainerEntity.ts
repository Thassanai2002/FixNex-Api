import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { TrainerRantals } from './trainerRantalsEntity';

@Entity()
export class Trainer {
  @PrimaryGeneratedColumn()
  trainer_id: number;

  @Column()
  trainer_name: string;

  @Column()
   specialty: string;

   @Column()
   avaliability: string;

   @OneToMany(() => TrainerRantals, (rental) => rental.trainer)
   rentals: TrainerRantals[];
}