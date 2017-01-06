import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { loginPageComponent } from './loginPage/login.component';
import { dashboardComponent } from './dashboard/dashboard.component';
import { signUpComponent} from './loginPage/signupPage/signup.component';
import { carouselComponent} from './loginPage/carousel/carousel.component';

import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';
import { LoginFormComponent } from './loginPage/loginForm/loginForm.component';
// import {FacebookLoginComponent} from './loginPage/signupPage/facebooklogin.component';

export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
      'swipe': {velocity: 0.4, threshold: 20} // override default settings
  }
}

@NgModule({
  declarations: [
    AppComponent,
    loginPageComponent,
    dashboardComponent,
    signUpComponent,
    carouselComponent,
    LoginFormComponent,
  // FacebookLoginComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutes
  ],
  bootstrap: [AppComponent],
  providers: [{provide:HAMMER_GESTURE_CONFIG,  useClass: MyHammerConfig }]
})
export class AppModule { }
