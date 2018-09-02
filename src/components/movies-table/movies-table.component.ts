import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { MovieModel } from '../../models/Movie.model';
import { RatingComponent } from './../rating/rating.component';
@Component({
  selector: 'app-movies-table',
  templateUrl: './movies-table.component.html',
  styleUrls: ['./movies-table.component.scss']
})
export class MoviesTableComponent implements OnInit {
  @Input() fullView: boolean = true;
  movies: MovieModel[] = [];
  p: number = 1;
  private gridApi;
  private gridColumnApi;
  private sortingOrder;
  columnDefs = [];
  frameworkComponents;

  constructor(private movieService: MovieService) {
    this.movieService.data.subscribe(data => {
      if (this.gridApi) {
        const index = this.movies.indexOf(data);
        var rowNode = this.gridApi.getRowNode(index);
        rowNode.setDataValue("avgRating", data.avgRating);
      }
    })

  }

  ngOnInit() {
    this.columnDefs = [
      {
        headerName: 'Title', field: 'title', width: 200, filter: "agTextColumnFilter"
      },
      {
        headerName: 'Relese Date', field: 'releaseDate', width: 200, suppressFilter: true
      },
      {
        headerName: 'Avg Rating', field: 'avgRating', width: 200, suppressSorting: true, suppressFilter: true
      },
      {
        headerName: 'Rating', field: 'Rating', width: 200, hide: !this.fullView,
        cellRenderer: 'ratingComponent', suppressFilter: true
      }
    ];

    this.frameworkComponents = {
      ratingComponent: RatingComponent
    };

    if (this.movieService.movies.length === 0) {
      this.movieService.fetchMovies().then(() => {
        this.movies = this.movieService.movies;
      });
    } else {
      this.movies = this.movieService.movies;
    }

  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    if (this.fullView) {
    } else {
      this.gridColumnApi.getColumn('avgRating').setSort('desc');
    }

  }

}
