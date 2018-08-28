import { Injectable } from '@angular/core';
import { UserModel } from '../models/User.model';


@Injectable()
export class UserService {

  constructor() { }

  registerUser(data) {
    const userList = JSON.parse(localStorage.getItem('userList')) || [];
    userList.push(new UserModel(data));
    localStorage.setItem('userList', JSON.stringify(userList));
  }

  checkIfUserExist(email: string): boolean {
    const users = JSON.parse(localStorage.getItem('userList')) || [];
    const flag = users.filter((user) => (user.email === email)).length > 0;
    return flag;
  }

  validatePassword(email: string, password: string): UserModel {
    const users = JSON.parse(localStorage.getItem('userList')) || [];
    const user = users.filter((user) => (user.email === email))[0];
    return user.password === password ? user : null;
  }

}
