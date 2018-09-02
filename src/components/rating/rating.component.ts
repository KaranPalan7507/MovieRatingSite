import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from "ag-grid-angular";
import { MovieModel } from '../../models/Movie.model';
import { UserService } from '../../services/user.service';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit, ICellRendererAngularComp {
  private params: any;
  movie: MovieModel;
  rating: number = 0;
  constructor(private userService: UserService, private movieService: MovieService) { }

  agInit(params: any): void {
    this.params = params;
    this.movie = params.data;
    this.rating = this.userService.currentUser ? this.userService.getMovieRating(this.movie.title) : 0;
  }

  ngOnInit() {
  }

  refresh(): boolean {
    return false;
  }

  setRating(rating) {
    this.movieService.updateRating(this.userService.currentUser.email, this.movie.title, rating.rating);
    this.userService.setMovieRating(this.movie.title, rating.rating);
  }

}
