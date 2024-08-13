import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateEmployeeInput {
  @Field(() => String)
  first_name: string;

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
