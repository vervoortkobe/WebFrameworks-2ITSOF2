import { Component, OnInit } from '@angular/core';
import * as _ from "lodash"

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  min_foto = 1;
  max_foto = 152;
  foto = 1;
  fotos: IPhoto[] = [];

  constructor() {
    for (let index = this.min_foto; index <= this.max_foto; index++)
      this.fotos.push({value: index, label: `foto ${index}`})
   }

  ngOnInit() {
    this.Random();
    setInterval(this.Random, 5000)
  }

  Random = () =>
  {
    this.foto = _.random(this.min_foto, this.max_foto)
  }

  get imageURL()
  {
    return `https://mdbootstrap.com/img/Photos/Slides/img%20(${this.foto}).jpg`  
  }
}


export interface IPhoto{
  label: string;
  value: number;
}