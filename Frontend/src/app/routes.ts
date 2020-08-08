import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';

export const appRoutes: Routes = [
    {
        path: 'signup', component: RegisterComponent
    },
    {
        path: 'signin', component: LoginComponent
    },
    {
        path: 'home', component: DashboardComponent
    },
    {
        path: '', redirectTo: '/signin', pathMatch: 'full'
    }
];
