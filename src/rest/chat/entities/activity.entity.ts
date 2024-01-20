import { Field, InputType } from '@nestjs/graphql';
import { IsInstance } from 'class-validator';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class Activity {
  @Field(() => String)
  @IsInstance(String)
  readonly type: string;

  @Field(() => GraphQLJSON)
  @IsInstance(Object)
  readonly value: {
    [key: string]: any;
  };
}
