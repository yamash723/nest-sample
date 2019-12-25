import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntityDto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'first_name', length: 500 })
  firstName: string;

  @Column({ name: 'last_name', length: 500 })
  lastName: string;

  @Column('int')
  age: number;
}
