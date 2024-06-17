import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/types';
import { PokedexService } from '../pokedex.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  
  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute, private pokedex: PokedexService) { }

  async ngOnInit() {
    await this.pokedex.loadPokemon();
    this.route.paramMap.subscribe(params => {
      if (params.get("id") != null) {
        this.pokemon = this.pokedex.getPokemonById(Number(params.get("id")));
      }
    });
  }

  update() {
    if (this.pokemon) {
      this.pokedex.updatePokemon(this.pokemon);
    }
  }

}
