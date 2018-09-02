import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  model: any = {};

  constructor(private userService: UserService, private router: Router) {

  }

  onSubmit() {
    if (this.userService.checkIfUserExist(this.model.email)) {
      window.alert('User already exists');
    } else {
      this.userService.registerUser(this.model);
      this.userService.setIsUserLoggedIn(this.model);
      this.userService.currentUser = this.model
      this.router.navigateByUrl('landing');

    }
  }
}