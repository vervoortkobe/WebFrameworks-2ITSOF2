import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SteamLibrary } from 'src/types';
import * as steam from "../steam.json";

@Injectable()
export class GamesService {
    private steamLibrary: SteamLibrary = steam;

    public get games() {
      return this.steamLibrary.games
    }
    public findGameById(id :number) {
        return this.steamLibrary.games.find(game => game.id === id);
    }

    public get genres() {
      return this.steamLibrary.genres
    }

    public findByGenreId(id :number) {
        return this.steamLibrary.genres.find(genre => genre.id === id);
    }
  
}
