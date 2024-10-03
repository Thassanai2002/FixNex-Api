import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Discount {
  @PrimaryGeneratedColumn()
  discount_id: number;

  @Column()
  discount_name: string;

  @Column()
   description: string;

   @Column()
   discount_percentage: number;

   @Column()
   applicable_for: string;

   @Column()
   vip_required: string;

}