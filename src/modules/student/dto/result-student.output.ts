import { ObjectType } from '@nestjs/graphql';

import { createResult } from '@/common/dto/result.type';
import { StudentType } from './student.type';

@ObjectType()
export class StudentResult extends createResult(StudentType) {}
