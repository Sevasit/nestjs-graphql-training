import { CreateEmployeeInput } from './create-employee.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateEmployeeInput extends PartialType(CreateEmployeeInput) {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  last_name: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  phone_number: string;

  @Field(() => Date)
  hire_date: Date;

  @Field(() => Int)
  country_id: number;

  @Field(() => Number)
  salary: number;

  @Field(() => Number)
  commission_pct: number;

  @Field(() => Int)
  department_id: number;
}
