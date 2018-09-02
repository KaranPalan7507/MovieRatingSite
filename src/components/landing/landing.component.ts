import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  isLoggedIn = this.userService.getIsUserLoggedIn();

  constructor(private movieService: MovieService, private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

}
