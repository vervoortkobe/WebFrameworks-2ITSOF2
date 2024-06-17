import { Module } from '@nestjs/common';
import { PokedexService } from './pokedex/pokedex.service';
import { PokemonController } from './pokemon/pokemon.controller';

@Module({
  imports: [],
  controllers: [PokemonController],
  providers: [PokedexService],
})
export class AppModule {}
