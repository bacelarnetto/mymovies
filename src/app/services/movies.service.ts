import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class MoviesService {
  api_key = 'api_key=eff4a3d0649417c913e5e80f393f1c86';
  base_path = 'https://api.themoviedb.org/3';
  movies_popular_path = `${this.base_path}/movie/popular?${this.api_key}`;
  constructor(
    private http: HttpClient
  ) { }

  getMovies() {
    return new Promise((resolve, reject) => {
      this.http.get(this.movies_popular_path).subscribe(
        data => {
          console.log(data);
          resolve(data);
        }, err => {
          console.log(err);
          reject(err);
        }
      );
    });
  }

  getMovie(id) {
    return new Promise((resolve, reject) => {
      const url = `${this.base_path}/movie/${id}?${this.api_key}`;
      this.http.get(url).subscribe(
        data => {
          console.log(data);
          resolve(data);
        }, err => {
          console.log(err);
          reject(err);
        }
      );
    });
  }
}
