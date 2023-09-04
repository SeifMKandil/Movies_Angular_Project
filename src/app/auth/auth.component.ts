import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit{
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
    const localData = localStorage.getItem('registeredUsers');
    if(localData != null){
      this.registeredUsers = JSON.parse(localData);
    }
  }

  onLogin(){
    const userExist = this.registeredUsers.find(m=> m.userName == this.loginObj.userName && m.password == this.loginObj.password);
    if(userExist != undefined){
      alert("You have logged in ");
      this.loginObj.isLoggedin = true;

    }else{
      alert("Failed!!");
    }
  
  }

}
