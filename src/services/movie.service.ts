import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieModel } from '../models/Movie.model';
import { flatMap, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MovieService {
  private movieSubject: BehaviorSubject<any> = new BehaviorSubject(MovieModel);
  data = this.movieSubject.asObservable();


  movies: MovieModel[] = [];
  constructor(private http: HttpClient) {
  }


  getMovies() {
    return this.movies;
  }
  adjustRating() {
    const ratings = JSON.parse(localStorage.getItem('userRating'));
    for (var key in ratings) {
      const movies = ratings[key];
      for (var movieTitle in movies) {
        const rating = movies[movieTitle];
        const movie = this.findMovieByTitle(movieTitle);
        movie.ratings.push(rating);
        movie.avgRating = movie.getAvgRating();
      }
    }
  }

  updateRating(userEmail, title, rating) {
    const ratings = JSON.parse(localStorage.getItem('userRating'));
    const currentRating = ratings ? ratings[userEmail] ? ratings[userEmail][title] : null : null;
    const movie = this.findMovieByTitle(title);

    if (currentRating) {
      const index = movie.ratings.indexOf(currentRating);
      movie.ratings[index] = rating;
    } else {
      movie.ratings.push(rating);
    }
    movie.avgRating = movie.getAvgRating();

    this.movieSubject.next(movie);

  }

  findMovieByTitle(title) {
    const movie = this.movies.filter((movie) => {
      return movie.title === title;
    })
    return movie[0];
  }

  fetchMovies() {
    let promise = new Promise((resolve, reject) => {
      let url = './assets/movies.json';
      this.http.get<MovieModel[]>(url).subscribe(movie => {
        movie.map((movie => {
          this.movies.push(new MovieModel(movie));
        })),
          this.adjustRating();
        resolve();
      });
    });
    return promise;

  }

}
