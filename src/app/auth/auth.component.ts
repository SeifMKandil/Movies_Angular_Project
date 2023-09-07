import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { FirebaseAuthService } from '../services/firebase-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit{

  loginForm!: FormGroup;


  loginObj: any = {
    email: '',
    password: '',
    isLoggedin : false

  };

  

  registeredUsers: any[] = [];

  constructor(private authService: AuthenticationService , private firebaseAuth: FirebaseAuthService , private router:Router) {
    this.registeredUsers = authService.getRegisteredUsers();
  }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email' : new FormControl(null,[Validators.required, Validators.email]),
      'password':  new FormControl(null,[Validators.required , Validators.minLength(6)])

    })

    const localData = localStorage.getItem('registeredUsers');
    if(localData != null){
      this.registeredUsers = JSON.parse(localData);
    }
  }

  onLogin(type: string | null = null): void {
    if (type === 'Firebase'){
      this.firebaseAuth.login(this.loginForm.value.email ,this.loginForm.value.password).subscribe(
        responseData => {
          console.log(this.loginForm.value.email)
          console.log(responseData);
          this.router.navigate(['/catalogue'])
          
          
        }, error => {
          console.error("Firebase login error:", error);
          
        }
        
      )
      console.log("FireBase Login ");
    }else{
      const userExist = this.registeredUsers.find(m=> m.email == this.loginForm.value.email && m.password == this.loginForm.value.password);
      if(userExist != undefined){
        alert("You have logged in ");
        this.loginObj.isLoggedin = true;
        this.loginObj.email = this.loginForm.value.email;
        console.log("Local Login ");
  
      }else{
        alert("Failed!!");
      }

    }
   
    
  
  }

  

}
