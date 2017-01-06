import {Component} from '@angular/core';
import {Config} from 'app/config';
// import {FacebookLoginComponent} from './facebooklogin.component';
// import { NgModule } from '@angular/core';
// import {Router} from '@angular/router';
declare const FB:any;
@Component({
selector:'signUpSelector',
templateUrl:'./signupPage.html',
styleUrls:['./signup.component.css'],
// directives:[FacebookLoginComponent]
})

export class signUpComponent
{

SignUp = Config.SignUp;
FacebookSignupText = Config.facebookSignupText;
TwitterSignupText = Config.twitterSignupText;
GoogleplusSignupText = Config.googleplusSignupText;

constructor(



){}

onFacebookLoginClick () {
  //alert('clicked');
  FB.login(function(response) {
    if (response.authResponse) {
     console.log('Welcome!  Fetching your information.... ');
     FB.api('/me', function(response) {
       var accessToken = FB.getAuthResponse();
       console.log('Good to see you, ' + JSON.stringify(accessToken));
     });
    } else {
     console.log('User cancelled login or did not fully authorize.');
    }
});
}
//onSignIn(googleUser) {
//	console.log('in onSignIn' + googleUser);
////  var profile = googleUser.getBasicProfile();
////  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
////  console.log('Name: ' + profile.getName());
////  console.log('Image URL: ' + profile.getImageUrl());
////  console.log('Email: ' + profile.getEmail());
//}

onSignIn(){
  window.location.href = "https://accounts.google.com/ServiceLogin?service=mail&passive=true&rm=false&continue=https://mail.google.com/mail/&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1#identifier";
}
}
