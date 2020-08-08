import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'

export const appRoutes: Routes = [
    {
        path: 'signup', component: RegisterComponent
    },
    {
        path: 'signin', component: LoginComponent
    },
    {
        path: '', redirectTo: '/signin', pathMatch: 'full'
    }
];
