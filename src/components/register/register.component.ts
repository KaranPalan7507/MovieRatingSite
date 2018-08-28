import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  model: any = {};

  constructor(private userService: UserService) {

  }

  onSubmit() {
    if (this.userService.checkIfUserExist(this.model.email)) {
      window.alert('User already exists');
    }else{
      this.userService.registerUser(this.model);
    }
  }
}