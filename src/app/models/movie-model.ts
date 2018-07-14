export class MovieModel {

  id: number;
  poster_path: string;
  original_title: string;
  overview: string;

  get img_url(): string {
    return 'https://image.tmdb.org/t/p/w500' + this.poster_path;
  }

}
