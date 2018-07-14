import { MoviesService } from './../../services/movies.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieModel } from '../../models/movie-model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  id: string;
  movie: MovieModel = new MovieModel();
  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe(
      params => {
        this.id = params['id'];
        this.moviesService.getMovie(this.id).then(data => {
          const response = data as any;
          this.movie.original_title = response.original_title;
          this.movie.overview = response.overview;
          this.movie.poster_path = response.poster_path;
          this.movie.id = response.id;
          console.log(this.movie);
        });
      }
    );
  }
  ngOnInit() {
  }
}
