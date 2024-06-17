import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DiaryService } from 'src/diary/diary.service';
import { DiaryPost } from 'src/types';

@Controller('posts')
export class PostsController {

    constructor(private diaryService: DiaryService) {
        
    }

    @Get()
    public async getPosts() {
        return this.diaryService.getPosts();
    }

    @Get(":id")
    public async getPost(@Param('id') id: string) {
        return this.diaryService.getPost(id);
    }

    @Post()
    public async createPost(@Body() post: DiaryPost) {
        return this.diaryService.createPost(post);
    }

    @Delete(":id")
    public async deletePost(@Param('id') id: string) {
        return this.diaryService.deletePost(id);
    }

    @Put(":id")
    public async updatePost(@Param('id') id: string, @Body() post: DiaryPost) {
        return this.diaryService.updatePost(id, post);
    }
    

}
