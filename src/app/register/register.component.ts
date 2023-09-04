import { AuthenticationService } from './../services/authentication.service';
// register.component.ts

import { Component } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerObj: any = {
    userName: '',
    email: '',
    password: ''
  };

  constructor(private authService: AuthenticationService) {}

  onRegister() {
    this.authService.addRegisteredUser(this.registerObj);
    localStorage.setItem('registeredUsers', JSON.stringify(this.authService.getRegisteredUsers()));
    this.registerObj = {
      userName: '',
      email: '',
      password: ''
    };
  }
}
