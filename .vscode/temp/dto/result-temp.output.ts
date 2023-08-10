import { ObjectType } from '@nestjs/graphql';

import { createResult, createResults } from '@/common/dto/result.type';
import { TempType } from './temp.type';

@ObjectType()
export class TempResult extends createResult(TempType) {}

@ObjectType()
export class TempResults extends createResults(TempType) {}
