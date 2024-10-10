import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';

export const routes: Routes = [
  {
    path:"",
    component : HeaderComponent
  },
  {
    path:"register",
    component : RegisterComponent
  }
];
