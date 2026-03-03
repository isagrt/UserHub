import { Routes } from '@angular/router';
import { List } from './pages/list/list';
import { Details } from './pages/details/details';

export const routes: Routes = [

  {
    path: 'lista',
    component: List
  },
  {
  path:'detalhes',
  component: Details
  }
];
