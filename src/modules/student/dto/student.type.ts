import { Field, ObjectType } from '@nestjs/graphql';

/**
 * 学员
 */
@ObjectType()
export class StudentType {
  @Field({
    description: 'id',
  })
  id: number;

  @Field({
    description: '昵称',
  })
  name: string;

  @Field({
    description: '账号',
  })
  account: string;
}
