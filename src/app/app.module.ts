import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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


const appRoutes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'catalogue' , component: CatalogueComponent },
  { path: 'auth' , component: AuthComponent },
  { path: 'register' , component: RegisterComponent },
  { path: 'movieDetails/:id',component:MovieDetailsComponent}

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
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// const ApiKey = "f2d7215515a34f350462609e31a408ef";
// const Base = 'https://api.themoviedb.org/3/'
// https://api.themoviedb.org/3/movie/157336?api_key=f2d7215515a34f350462609e31a408ef