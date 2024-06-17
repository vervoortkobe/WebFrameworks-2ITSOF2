import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PokedexService } from 'src/pokedex/pokedex.service';
import { Pokemon } from 'src/types';


// Controller
// Maak een controller aan met de naam pokemon. Deze controller moet de volgende endpoints bevatten:
// GET /pokemon
// Deze endpoint geeft alle pokemon terug in een JSON array
// GET /pokemon/:id
// Deze endpoint geeft een pokemon terug met het meegegeven id
// POST /pokemon
// Deze endpoint maakt een nieuwe pokemon aan.
// PUT /pokemon/:id
// Deze endpoint update een pokemon met het meegegeven id. Het meegegeven object bevat de nieuwe waarden. Het id mag niet veranderen.
// DELETE /pokemon/:id
// Deze endpoint verwijdert een pokemon met het meegegeven id.
// Deze endpoints moeten de juiste methodes van de service aanroepen.
// Error handling
// Als een pokemon niet gevonden wordt met een bepaald id, moet je een 404 error teruggeven met de tekst "Pokemon not found".
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
