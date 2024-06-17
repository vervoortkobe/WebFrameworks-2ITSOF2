import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PokedexService } from 'src/pokedex/pokedex.service';
import { Pokemon } from 'src/types';

@Controller('pokemon')
export class PokemonController {
    constructor(private _pokedex: PokedexService) {

    }

    @Get()
    public getAllPokemon() {
        return this._pokedex.getAllPokemon();
    }

    @Get(':id')
    public getPokemonById(@Param('id') id: string) {
        return this._pokedex.getPokemonById(id);
    }

    @Post()
    public createPokemon(@Body() pokemon: Pokemon) {
        return this._pokedex.createPokemon(pokemon);
    }
    
    @Put(":id") 
    public updatePokemon(@Body() pokemon: Pokemon, @Param('id') id: string) {
        return this._pokedex.updatePokemon(id, pokemon);
    }
    
    @Delete(":id")
    public deletePokemon(@Param('id') id: string) {
        return this._pokedex.deletePokemon(id);
    }

    
}
