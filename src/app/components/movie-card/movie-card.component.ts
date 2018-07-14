import { Router } from '@angular/router';
import { Component, OnInit, Input, Output } from '@angular/core';
import { MovieModel } from '../../models/movie-model';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  constructor(
    private router: Router
  ) { }
  @Input() movie: MovieModel;
  @Output() movieClicked = new EventEmitter();
  ngOnInit() {
  }

  itemClicked(movie) {
    this.router.navigate([ '/details' , movie.id]);
}
