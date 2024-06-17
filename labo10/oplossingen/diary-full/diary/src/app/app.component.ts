import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { DiaryPost } from 'src/types';
import { DiaryService } from './diary.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public htmlContent =  "";
  public date = "";
  public post: DiaryPost | undefined;
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };

  constructor(private service: DiaryService) {
    this.setCurrentDate();
  }

  async ngOnInit() {
    this.service.getPosts();
  }

  public get posts() {
    return this.service.posts;
  }

  async submit() {
      await this.service.createPost({
        date: this.date,
        text: this.htmlContent
      });
  }

  async submitEdit() {
    if (this.post) {
      await this.service.updatePost(this.post._id!, {
        date: this.date,
        text: this.htmlContent
      });
      this.post = undefined;
      this.htmlContent = "";
      this.setCurrentDate();
    }
  }

  delete(post: DiaryPost) {
    this.service.deletePost(post);
  }

  edit(post: DiaryPost) {
    this.post = post;
    this.htmlContent = post.text;
    this.date = post.date;
  }

  private setCurrentDate() {
    this.date = new Date().toISOString().split('T')[0] + "T00:00";
  }


}
