import { Module } from '@nestjs/common';
import { MensenModule } from './mensen/mensen.module';

@Module({
  imports: [MensenModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
