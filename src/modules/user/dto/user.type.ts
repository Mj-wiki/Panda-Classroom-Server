import { ObjectType, Field } from '@nestjs/graphql';

/**
 * 用户
 */
@ObjectType()
export class UserType {
  @Field()
  id?: string;
  @Field()
  name?: string;
  @Field()
  desc: string;
  @Field()
  account: string;
  @Field()
  type: string;
}
