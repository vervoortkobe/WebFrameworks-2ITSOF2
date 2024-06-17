import { Component, OnInit } from '@angular/core';
import * as _ from "lodash"

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  foto = 1;
  constructor() {
    
   }

  ngOnInit() {
    this.Random();
    setInterval(this.Random, 5000)
  }

  Random = () =>
  {
    this.foto = _.random(1,152)
  }

  get imageURL()
  {
    return `https://mdbootstrap.com/img/Photos/Slides/img%20(${this.foto}).jpg`  
  }
}
