import { Routes } from '@angular/router';
import { List } from './pages/list/list';
import { Details } from './pages/details/details';

export const routes: Routes = [

  {
    path: '',
    redirectTo: '/lista',
    pathMatch: 'full'
  },
  {
    path: 'lista',
    component: List
  },
  {
  path:'user/:id',
  component: Details
  }
];
