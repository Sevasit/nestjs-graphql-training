import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'employees' })
@ObjectType()
export class Employee {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  employee_id: number;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true, name: 'first_name' })
  first_name: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true, name: 'last_name' })
  last_name: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true, name: 'email' })
  email: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true, name: 'phone_number' })
  phone_number: string;

  @Field(() => Date, { nullable: true })
  @Column({ nullable: true, name: 'hire_date' })
  hire_date: Date;

  @Field(() => Int, { nullable: true })
  @Column({ nullable: true, name: 'country_id' })
  country_id: number;

  @Field(() => Number, { nullable: true })
  @Column({ nullable: true, name: 'salary' })
  salary: number;

  @Field(() => Number, { nullable: true })
  @Column({ nullable: true, name: 'commission_pct', type: 'decimal', precision: 5, scale: 2 })
  commission_pct: number;

  @Field(() => Int, { nullable: true })
  @Column({ nullable: true, name: 'department_id' })
  department_id: number;
}
