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
    path: 'produtos',
    loadComponent: () => import('./produtos/produtos.page').then( m => m.ProdutosPage)
  },
  {
    path: 'create-cliente',
    loadComponent: () => import('./create-cliente/create-cliente.page').then( m => m.CreateClientePage)
  },

];
