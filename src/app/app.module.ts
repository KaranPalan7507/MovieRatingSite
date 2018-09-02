import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './../components/login/login.component';
import { RegisterComponent } from './../components/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingComponent } from './../components/landing/landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { MovieService } from '../services/movie.service';
import { MoviesTableComponent } from './../components/movies-table/movies-table.component';
import { LogoutComponent } from './../components/logout/logout.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { AgGridModule } from 'ag-grid-angular';
import { RatingComponent } from './../components/rating/rating.component';
import { StarRatingModule } from 'angular-star-rating';
import { HeaderComponent } from './../components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LandingComponent,
    MoviesTableComponent,
    LogoutComponent,
    RatingComponent,
    HeaderComponent
  ],
  imports: [
    StarRatingModule.forRoot(),
    AgGridModule.withComponents([RatingComponent]),
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [UserService, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
