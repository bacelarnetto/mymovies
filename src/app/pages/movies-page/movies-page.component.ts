import { Router } from '@angular/router';
import { MovieModel } from '../../models/movie-model';
import { MoviesService } from '../../services/movies.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component ({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss']
})
export class MoviesPageComponent  implements OnInit {
  @Input() perpage: number;
  title = 'app';
  movies: Array<MovieModel> = [];
  loading = true;
  ngOnInit(): void {
  }
  constructor(
    private moviesService: MoviesService
  ) {
      this.moviesService.getMovies().then(data => {
      const response = data as any;
      this.loading = false;
      this.movies = response.results .map(item => {
          const moviemodel = new MovieModel();
          moviemodel.original_title = item.original_title;
          moviemodel.overview = item.overview;
          moviemodel.poster_path = item.poster_path;
          moviemodel.id = item.id;
          return moviemodel;
      }) ;
    });
  }
}

