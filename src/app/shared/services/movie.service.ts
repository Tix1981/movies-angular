import { Injectable } from '@angular/core';

import { exampleMovies } from '../examples'
import { Observable, Observer } from 'rxjs';
import { Movie } from '../../shared/models/movie.model';

@Injectable()
export class MovieService {

  private movies: Movie[] = [];

  constructor() { }

  public getMovies() {
    this.movies =
      exampleMovies.map(example =>
        new Movie(
          example.id,
          example.name,
          example.director,
          example.imageUrl,
          example.duration,
          example.releaseDate,
          example.genres)
        );
    return Observable.of (
      this.movies
    );
  }

}
