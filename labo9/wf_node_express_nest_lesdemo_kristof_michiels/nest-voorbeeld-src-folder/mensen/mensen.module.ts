import { Module } from '@nestjs/common';
import { MensenController } from './mensen.controller';
import { MensenService } from './mensen.service';

@Module({
  controllers: [MensenController],
  providers: [MensenService],
})
export class MensenModule {}
