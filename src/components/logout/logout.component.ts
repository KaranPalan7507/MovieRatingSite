import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {

  constructor(private userService: UserService, private router: Router) {
    this.userService.setIsUserLoggedIn(null);
    setTimeout(() => {
      this.router.navigateByUrl('landing');
    }, 5000);

  }

}
