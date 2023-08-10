import { TempResolver } from './temp.resolver';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Temp } from './models/temp.entity';
import { TempService } from './temp.service';

@Module({
  imports: [TypeOrmModule.forFeature([Temp])],
  providers: [TempService, TempResolver],
  exports: [TempService],
})
export class TempModule {}
