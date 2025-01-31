import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"Nav",component:NavComponent},
  {path:"About",component:AboutComponent},

];
