import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Login } from './pages/login/login';
import { PageNotFound } from './pages/page-not-found/page-not-found';
// import { Users } from './pages/users/users';
import { UsersDetails } from './users-details/users-details';
import { AdminLogin } from './pages/login/admin-login/admin-login';
import { UserLogin } from './pages/login/user-login/user-login';

export const routes: Routes = [
    {path:"",component:Home},
    {path:"home",component:Home},
    {path:'about/:name/:age',component:About},
    {path:'about/:name',component:About},
    {path:'about',component:About},
    {path:'login',component:Login,children:[
        {path:'',component:UserLogin},
        {path:'admin-login',loadComponent:()=>import("./pages/login/admin-login/admin-login").then(m=>m.AdminLogin)},
        {path:'user-login',component:UserLogin}
    ]},
    {path:'users',loadComponent:()=>import("./pages/users/users").then(m=>m.Users)},
    {path:'users-details/:id',component:UsersDetails},
    {path:"**",component:PageNotFound}
    
];
