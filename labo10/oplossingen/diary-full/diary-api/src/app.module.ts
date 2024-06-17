import { Module } from '@nestjs/common';
import { DiaryService } from './diary/diary.service';
import { PostsController } from './posts/posts.controller';

@Module({
  imports: [],
  controllers: [PostsController],
  providers: [DiaryService],
})
export class AppModule {}
