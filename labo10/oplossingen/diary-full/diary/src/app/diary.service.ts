import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { DiaryPost } from 'src/types';

@Injectable({
  providedIn: 'root'
})
export class DiaryService {

  private _posts: DiaryPost[] = [];

  constructor(private httpClient: HttpClient) { }

  public async getPosts() {
    this._posts = await lastValueFrom(this.httpClient.get<DiaryPost[]>('http://localhost:3000/posts'));
  }

  public async createPost(post: DiaryPost) {
    await lastValueFrom(this.httpClient.post<DiaryPost>('http://localhost:3000/posts', post));
    await this.getPosts();
  }

  public async updatePost(id: string, post: DiaryPost) {
    await lastValueFrom(this.httpClient.put<DiaryPost>(`http://localhost:3000/posts/${id}`, post));
    await this.getPosts();
  }

  public async deletePost(post: DiaryPost) {
    await lastValueFrom(this.httpClient.delete<DiaryPost>(`http://localhost:3000/posts/${post._id}`));
    await this.getPosts();
  }

  public get posts() {
    return this._posts;
  }
}
