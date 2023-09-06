import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit{

  loginForm!: FormGroup;


  loginObj: any = {
    userName: '',
    password: '',
    isLoggedin : false

  };

  

  registeredUsers: any[] = [];

  constructor(private authService: AuthenticationService) {
    this.registeredUsers = authService.getRegisteredUsers();
  }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'userName' : new FormControl(null,[Validators.required, Validators.minLength(4)]),
      'password':  new FormControl(null,[Validators.required , Validators.minLength(6)])

    })

    const localData = localStorage.getItem('registeredUsers');
    if(localData != null){
      this.registeredUsers = JSON.parse(localData);
    }
  }

  onLogin(){
    
     const userExist = this.registeredUsers.find(m=> m.userName == this.loginForm.value.userName && m.password == this.loginForm.value.password);
    if(userExist != undefined){
      alert("You have logged in ");
      this.loginObj.isLoggedin = true;
      this.loginObj.userName = this.loginForm.value.userName;

    }else{
      alert("Failed!!");
    }
    
  
  }

}
