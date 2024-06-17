import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon.entity';

@Controller('api/pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  getAllPokemon(): Pokemon[] {
    return this.pokemonService.getAllPokemon();
  }

  @Get(':id')
  getPokemonById(@Param('id') id: string): JSON | string {
    let pokemon = this.pokemonService.getPokemonById(+id);
    if (pokemon !== undefined) return JSON.parse(JSON.stringify(pokemon));
    else return 'Pokemon not found';
  }

  @Post()
  createPokemon(@Body('pokemon') pokemon: JSON): Pokemon {
    return this.pokemonService.createPokemon(pokemon);
  }

  @Put(':id')
  updatePokemon(
    @Param('id') id: string,
    @Body('pokemon') pokemon: string,
  ): Pokemon {
    return this.pokemonService.updatePokemon(+id, pokemon);
  }

  @Delete(':id')
  deletePokemon(@Param('id') id: string): boolean {
    return this.pokemonService.deletePokemon(+id);
  }
}
