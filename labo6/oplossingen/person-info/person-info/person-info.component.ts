import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})
export class PersonInfoComponent implements OnInit {

  person = {} as IPersonInfo;
  saved= false
  constructor() { }

  ngOnInit() {
  }

  Save()
  {
    this.saved = true;
  }
}

interface IPersonInfo
{
  Name: string;
  FirstName: string;
  Street: string;
  Number: string;
  City: string;
}
