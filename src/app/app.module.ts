import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Routes ,RouterModule } from '@angular/router';
import { SocialIconComponent } from './social-icon/social-icon.component';
import { HomeComponent } from './home/home.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { BookComponent } from './book/book.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from './user/user.component';
import { SliderComponent } from './slider/slider.component';

const appRoutes :Routes = [
  {
    path: '', component: LoginComponent,
    children: [
      {
        path: 'register', component: RegisterComponent
      }
    ]
  },

  {
    path: 'home', component: HomeComponent
  }

];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    SocialIconComponent,
    HomeComponent,
    SearchInputComponent,
    BookComponent,
    UserComponent,
    SliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
 })
export class AppModule { 
  
}
