import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class VipLevels {
  @PrimaryGeneratedColumn()
  vip_levels_id: number;

  @Column()
  vip_name: string; 

  @Column()
   min_spending: number; 

}