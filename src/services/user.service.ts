import { Injectable } from '@angular/core';
import { UserModel } from '../models/User.model';


@Injectable()
export class UserService {
  currentUser: UserModel;
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

  getIsUserLoggedIn() {
    const user = localStorage.getItem('currentUser');
    this.currentUser = JSON.parse(user) ? new UserModel(JSON.parse(user)) : null;
    return this.currentUser;
  }

  setIsUserLoggedIn(value) {
    localStorage.setItem('currentUser', JSON.stringify(value));
  }

  getMovieRating(title) {
    return this.currentUser.rating[title] || 0;
  }

  setMovieRating(title, rating) {
    this.currentUser.rating[title] = rating;
    const userEmail = this.currentUser.email;
    const userRating = JSON.parse(localStorage.getItem('userRating')) || {};
    userRating[userEmail]=userRating[userEmail]||{};
    userRating[userEmail][title] = rating;
    localStorage.setItem('userRating', JSON.stringify(userRating));
  }

}
