import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Pokemon } from 'src/types';
import pokemon from "../pokemon.json"

@Injectable()
export class PokedexService {
    private _pokemon: Pokemon[] = pokemon;

    constructor() {

    }

    public getAllPokemon(): Pokemon[] {
        return this._pokemon;
    }

    private assertExists(id: string) {
        let pokemon = this._pokemon.find(p => p.id === id);
        if (!pokemon) {
            throw new HttpException("Pokemon not found", HttpStatus.NOT_FOUND);
        }
    }

    public getPokemonById(id: string): Pokemon {
        this.assertExists(id);
        return this._pokemon.find(p => p.id === id);
    }

    public createPokemon(pokemon: Pokemon) {
        pokemon.id = (Math.max(...this._pokemon.map(p => parseInt(p.id))) + 1).toString();
        this._pokemon.push(pokemon);
        return pokemon;
    }

    public updatePokemon(id: string, pokemon: Pokemon) {
        this.assertExists(id);
        const index = this._pokemon.findIndex(p => p.id === id);
        pokemon.id = id;
        this._pokemon[index] = pokemon;
        return pokemon;
    }

    public deletePokemon(id: string) {
        this.assertExists(id);
        const index = this._pokemon.findIndex(p => p.id === id);
        this._pokemon.splice(index, 1);
    }
}
