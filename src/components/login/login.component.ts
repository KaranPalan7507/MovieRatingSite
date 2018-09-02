import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../models/User.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  model: any = {};

  constructor(private userService: UserService, private router: Router) {

  }

  onSubmit() {
    if (this.userService.checkIfUserExist(this.model.email)) {
      const user: UserModel = this.userService.validatePassword(this.model.email, this.model.password)
      if (user) {
        this.userService.setIsUserLoggedIn(user);
        this.userService.currentUser = new UserModel(user);
        this.router.navigateByUrl('landing');
      } else {
        window.alert('Wrong Password');
      }
    } else {
      window.alert('User not found');
    }
  }

}
