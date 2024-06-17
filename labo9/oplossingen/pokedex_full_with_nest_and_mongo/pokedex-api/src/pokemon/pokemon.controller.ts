import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PokedexService } from 'src/pokedex/pokedex.service';
import { Pokemon } from 'src/types';

@Controller('pokemon')
export class PokemonController {
    constructor(private _pokedex: PokedexService) {

    }

    @Get()
    public async getAllPokemon() {
        return await this._pokedex.getAllPokemon();
    }

    @Get(':id')
    public async getPokemonById(@Param('id') id: string) {
        return await this._pokedex.getPokemonById(id);
    }

    @Post()
    public async createPokemon(@Body() pokemon: Pokemon) {
        return await this._pokedex.createPokemon(pokemon);
    }
    
    @Put(":id") 
    public async updatePokemon(@Body() pokemon: Pokemon, @Param('id') id: string) {
        return await this._pokedex.updatePokemon(id, pokemon);
    }
    
    @Delete(":id")
    public async deletePokemon(@Param('id') id: string) {
        return await this._pokedex.deletePokemon(id);
    }

    
}
