import { Component, OnInit } from '@angular/core';
import {Config} from 'app/config';
import {UserDetails} from '../userModule';
import {Router} from '@angular/router';

@Component({
  selector: 'formSection',
  templateUrl: './loginForm.component.html',
  styleUrls: ['./loginForm.component.css']
})
export class LoginFormComponent implements OnInit {  

  ngOnInit() {
  }

    UserName = Config.UserName;
    Password = Config.Password;
    Login = Config.Login;
    SignUp = Config.SignUp;
    LoginWelcome = Config.LoginWelcome;


  constructor(
    private config:Config,
    private router: Router
  ) {
  }

model = new UserDetails('', '');

onSubmit() {
 
console.log('hi'+ this.model.userName);  

if (this.config.isEmpty(this.model)){
  alert('Please enter the credentials');
} else {
this.router.navigate(['dashboard']);
}
}

// showSignUpPage() {
// alert('routing to signup page');
// this.router.navigate(['signup']);
// }

}