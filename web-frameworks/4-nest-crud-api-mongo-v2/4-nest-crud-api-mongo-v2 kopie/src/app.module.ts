import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { KunstenaarModule } from './kunstenaar/kunstenaar.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/Kunstenaar'),
    KunstenaarModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
