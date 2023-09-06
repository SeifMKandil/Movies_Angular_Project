import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from './../services/authentication.service';
// register.component.ts

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerForm!: FormGroup;

  registerObj: any = {
    userName: '',
    email: '',
    password: ''
  };

  constructor(private authService: AuthenticationService) {}


  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'userName' : new FormControl(null,[Validators.required, Validators.minLength(4)]),
      'email' : new FormControl(null,[Validators.required, Validators.email]),
      'password':  new FormControl(null,[Validators.required , Validators.minLength(6)])

    })
  }

  onRegister(){
    this.registerObj = {
      userName: this.registerForm.value.userName,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
  };

  this.authService.addRegisteredUser(this.registerObj); // Add updated data
  localStorage.setItem('registeredUsers', JSON.stringify(this.authService.getRegisteredUsers())); // Save updated data to local storage
  }

  
}
