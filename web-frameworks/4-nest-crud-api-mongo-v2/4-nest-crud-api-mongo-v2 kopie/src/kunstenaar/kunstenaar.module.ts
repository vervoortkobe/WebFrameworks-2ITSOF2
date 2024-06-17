import { Module } from '@nestjs/common';
import { KunstenaarService } from './kunstenaar.service';
import { KunstenaarController } from './kunstenaar.controller';
import { Kunstenaar, KunstenaarSchema } from '../schema/kunstenaar.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Kunstenaar.name,
        schema: KunstenaarSchema,
      },
    ]),
  ],
  controllers: [KunstenaarController],
  providers: [KunstenaarService],
})
export class KunstenaarModule {}
