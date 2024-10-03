import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

}