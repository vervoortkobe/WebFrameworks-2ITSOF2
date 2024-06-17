import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oef-red-div',
  templateUrl: './oef-red-div.component.html',
  styleUrls: ['./oef-red-div.component.css']
})
export class OefRedDivComponent implements OnInit {
  x = 0;y = 0;
  classname ="";
  movecount = 0;
  hitcount = 0;
  constructor() { }

  ngOnInit() {
  }

  Dosomething(ev: MouseEvent)
  {
    this.x = ev.offsetX;
    this.y = ev.offsetY;
    this.movecount ++;
  }

  Down()
  {
      this.classname = "click"
      this.hitcount++;
  }

  Up()
  {
    this.classname = "";
  }

  Enter(evt: MouseEvent)
  {
      if (evt.buttons)
        this.Down();
  }
}
