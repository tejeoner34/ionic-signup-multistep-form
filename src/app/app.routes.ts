import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'personal-data',
    loadComponent: () => import('./pages/personal-data/personal-data.page').then( m => m.PersonalDataPage)
  },
  {
    path: 'address-data',
    loadComponent: () => import('./pages/address-data/address-data.page').then( m => m.AddressDataPage)
  },
];
