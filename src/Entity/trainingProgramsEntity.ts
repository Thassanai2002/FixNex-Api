import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class trainingProgram {
  @PrimaryGeneratedColumn()
  program_id: number;

  @Column()
  program_name: string;

  @Column()
  goal: string;

  @Column()
  descriptiom: string;

  @Column()
  vip_required: number;

  @Column()
  duration: number;
}
