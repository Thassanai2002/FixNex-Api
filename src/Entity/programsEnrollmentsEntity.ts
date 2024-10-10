import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class programsEnrollments {
  @PrimaryGeneratedColumn()
  enrollments_id: number;

  @Column()
  user_id: number;

  @Column()
  program_id: number;

  @Column()
  enrollment_date: string;

}
