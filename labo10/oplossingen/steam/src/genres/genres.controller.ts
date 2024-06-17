import { Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe } from '@nestjs/common';
import { GamesService } from 'src/games/games.service';

@Controller('genres')
export class GenresController {
    constructor(private gamesService: GamesService) {

    }

    @Get()
    public genres() {
        return this.gamesService.genres;
    }

    @Get(":id")
    public genreById(@Param("id", ParseIntPipe) id: number) {
        let genre = this.gamesService.findByGenreId(id);
        if (!genre) {
            throw new HttpException("Genre not found", HttpStatus.NOT_FOUND);
        }
        return genre;
    }

    @Get(":id/games")
    public gamesByGenre(@Param("id", ParseIntPipe) id: number) {
        return this.gamesService.games.find((game) => game.genre.id === id);
    }
}
