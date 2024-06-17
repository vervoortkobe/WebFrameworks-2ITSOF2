import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/types';
import { PokedexService } from '../pokedex.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private pokedex: PokedexService) { }

  ngOnInit(): void {
  }

  get pokemon() : Pokemon[] {
    return this.pokedex.pokemon;
  }

  toggleFavorite(pokemon: Pokemon) {
    this.pokedex.toggleFavorite(pokemon);
  }

  deletePokemon(pokemon: Pokemon) {
    this.pokedex.deletePokemon(pokemon);
  }
}
