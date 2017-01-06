//constant class for all common functions and variables

import { Injectable } from '@angular/core';
import {UserDetails} from './loginPage/userModule';

export class Config{
	static Login: string = "Login";
	static UserName: string = "Username";
	static Password: string = "Password";
	static Welcome: string = "Welcome";
	static SignUp: string = "Don't have an account? Sign Up !";
	static LoginWelcome:string = "Login Into Your Account";
	static facebookSignupText:string = "Sign In with Facebook";
	static twitterSignupText:string = "Sign In with Twitter";
	static googleplusSignupText:string = "Sign In with Google+";
	static taskHeading = "Your Tasks";
	static Todo: string = "To Do";
	static InProgress: string = "In Progress";
	static Completed: string = "Completed";
	
constructor() { }

 isEmpty(userdetails: UserDetails): boolean {
	
	if ((userdetails.userName == "") || (userdetails.password == "")) {
		console.log('nothing inside');
			return true;	
	} else {
		return false;
	}
	

	}
}