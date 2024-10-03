import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProgramEnrollments {
  @PrimaryGeneratedColumn()
  enrollment_id: number;

  @Column()
  user_id: number; // FK from user

  @Column()
   program_id: number; // FK from trainingProgram

   @Column()
   enrollment_date: string;

   @Column()
   status: string;

}