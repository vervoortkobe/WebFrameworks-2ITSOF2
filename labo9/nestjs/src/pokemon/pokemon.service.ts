import { Injectable } from '@nestjs/common';
import { Pokemon } from './pokemon.entity';

@Injectable()
export class PokemonService {
  private readonly pokemons: Pokemon[] = [];
  getAllPokemon(): Pokemon[] {
    return this.pokemons;
  }
  getPokemonById(id: number): Pokemon {
    return this.pokemons.find((p) => p.id === id);
  }
  createPokemon(pokemon: JSON): Pokemon {
    this.pokemons.push(new Pokemon(this.pokemons.length + 1, String(pokemon)));
    return this.pokemons[this.pokemons.length - 1];
  }
  updatePokemon(id: number, pokemon: string): Pokemon {
    this.getPokemonById(id);
    return this.pokemons.filter((p) => p.id === id)[0];
  }
  deletePokemon(id: number): boolean {
    this.getPokemonById(id);
    return true;
  }
}
