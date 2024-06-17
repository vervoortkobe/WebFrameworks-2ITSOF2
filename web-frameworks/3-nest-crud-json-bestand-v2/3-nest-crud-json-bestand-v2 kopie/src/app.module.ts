import { Module } from '@nestjs/common';
import { MensenModule } from './mensen/mensen.module';
import { KunstenaarsModule } from './kunstenaars/kunstenaars.module';

@Module({
  imports: [MensenModule, KunstenaarsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
