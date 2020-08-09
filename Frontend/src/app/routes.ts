import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { CategoriesComponent } from './training/categories/categories.component';
import { AddModulesComponent } from './training/add-modules/add-modules.component';
import { QueryComponent } from "./query/query.component";
import { Component } from '@angular/core';

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
        path: 'categories', component: CategoriesComponent
    },
    {
        path: 'addModules', component: AddModulesComponent
    },
    {
        path: 'createQuery', component: QueryComponent
    },
    {
        path: '', redirectTo: '/signin', pathMatch: 'full'
    }
];
