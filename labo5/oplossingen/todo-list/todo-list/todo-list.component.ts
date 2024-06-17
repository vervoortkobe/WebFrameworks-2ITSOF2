import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  title: string = "Todo lijstje";
  _items: string[] = [];
  _item: string = "";
  
  constructor() {
   }

  ngOnInit() {
  }

  SetItem(item: string)
  {
    this._item = item;
  }

  get item()
  {
    return this._item;
  }

  get items()
  {
    return this._items;
  }

  Voegtoe()
  {
    this.items.push(this._item)
    this._item = "";
  }

  Verwijder(idx: number)
  {
    this.items.splice(idx, 1)
  }
}
