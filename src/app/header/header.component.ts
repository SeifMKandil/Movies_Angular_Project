// header.component.ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FirebaseAuthService } from './../services/firebase-auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub: Subscription = new Subscription();
  isAuthenticated = false;

  constructor(private firebaseAuth: FirebaseAuthService, private router: Router) {}

  ngOnInit(): void {
    this.userSub = this.firebaseAuth.user$.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  onLogout(): void {
    this.firebaseAuth.logout();
  }
}
