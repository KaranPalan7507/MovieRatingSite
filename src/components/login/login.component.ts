import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../models/User.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  model: any = {};

  constructor(private userService: UserService) {

  }

  onSubmit() {
    if (this.userService.checkIfUserExist(this.model.email)) {
      const user:UserModel=this.userService.validatePassword(this.model.email, this.model.password)
      if(user){
        window.alert('login successful');
        console.log(user);
      }else{
        window.alert('Wrong Password');
      }
    } else {
      window.alert('User not found');
    }
  }

}
