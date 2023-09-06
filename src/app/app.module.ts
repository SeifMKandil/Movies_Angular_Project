import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

import { RouterModule, Routes } from '@angular/router';
import { SpinnerComponent } from './shared/spinner.component';
import { AuthGuard } from './guards/auth.guard';



const appRoutes: Routes = [
  { path: '' , component: HomeComponent },

  { path: 'auth' , component: AuthComponent },
  
  { path: 'register' , component: RegisterComponent },
  { path: 'movieDetails/:id',component:MovieDetailsComponent},
  {
    path: 'catalogue',
    component: CatalogueComponent,
    canActivate: [AuthGuard], 
  },

] 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CarouselComponent,
    CatalogueComponent,
    AuthComponent,
    RegisterComponent,
    MovieDetailsComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, 
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// const ApiKey = "f2d7215515a34f350462609e31a408ef";
// const Base = 'https://api.themoviedb.org/3/'
// https://api.themoviedb.org/3/movie/157336?api_key=f2d7215515a34f350462609e31a408ef