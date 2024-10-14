import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';
import { TrainingProgram } from './trainingProgramsEntity';

@Entity()
export class programsEnrollments {
  @PrimaryGeneratedColumn()
  enrollments_id: number;

  @Column()
  user_id: number;

  @Column()
  program_id: number;

  @ManyToOne(() => TrainingProgram) // กำหนดความสัมพันธ์กับ Trainer
  @JoinColumn({ name: 'program_id' }) // เชื่อมโยงกับ trainer_id
  program: TrainingProgram;

  @Column()
  enrollment_date: string;

}
