import { Component } from '@angular/core';
import { Person } from "./Person"

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {

  people: Person[] = [];

  constructor() {
    this.people.push(new Person("Jos", "De Roo", new Date(1990, 9, 1)))
    this.people.push(new Person("Bert", "Bibber", new Date(1085, 5, 20)))
    this.people.push(new Person("Wannes", "Tijlman", new Date(2001, 1, 10)))
  }
}