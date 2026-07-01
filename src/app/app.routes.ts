import { Routes } from '@angular/router';
import {Home} from './pages/home/home'
import { Appointments } from './pages/appointments/appointments';
import { AboutMe } from './pages/about-me/about-me';
import { Services } from './pages/services/services';
import { Contact } from './pages/contact/contact';
import {NotFound} from './pages/not-found/not-found'

export const routes: Routes = [
    {path:"home", component:Home},
    {path:"appointments", component:Appointments},
    {path:'about-me', component:AboutMe},
    {path:'services', component:Services},
    {path:'contact', component:Contact},
    {path:"", redirectTo:"/home", pathMatch:"full"},
    {path:"**", component:NotFound}

];
