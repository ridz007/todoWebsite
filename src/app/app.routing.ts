import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { loginPageComponent } from './loginPage/login.component';
import { dashboardComponent } from './dashboard/dashboard.component';
import {signUpComponent} from './loginPage/signupPage/signup.component';

const routes: Routes = [
{
    path:'', 
    component:loginPageComponent
},
{
    path: 'login',
    component: loginPageComponent
},
{
    path: 'dashboard',
    component: dashboardComponent
},
{
    path: 'signup',
    component: signUpComponent
}
];

export const AppRoutes : ModuleWithProviders = RouterModule.forRoot(routes);

