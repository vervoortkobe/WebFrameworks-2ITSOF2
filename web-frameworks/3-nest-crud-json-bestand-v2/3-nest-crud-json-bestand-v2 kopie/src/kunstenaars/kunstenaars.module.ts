import { Module } from '@nestjs/common';
import { KunstenaarsController } from './kunstenaars.controller';
import { KunstenaarsService } from './kunstenaars.service';

@Module({
  controllers: [KunstenaarsController],
  providers: [KunstenaarsService],
})
export class KunstenaarsModule {}
