import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  activeres : IResolution;
  resolutions: IResolution[] = [
    { width: 640, height: 400 },
    { width: 800, height: 600 }
  ]

  playing= false;
  constructor() { 
    this.activeres = this.resolutions[0];
  }

  ngOnInit(): void {
    // setInterval(() => this.Start(true), 2000)
  }

  ngAfterViewInit() {
    // this.vid1.nativeElement.play();
  }
  
  SelRes(info)
  {
    this.activeres = this.resolutions[info]
  }

  Start(play) {
    this.playing = play;
  }
  getMax()
  {
    return 
  }
}

export interface IResolution {
  width: number;
  height: number;
}

