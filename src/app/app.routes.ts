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
  },  {
    path: 'produto',
    loadComponent: () => import('./produto/produto.page').then( m => m.ProdutoPage)
  },
  {
    path: 'produtos',
    loadComponent: () => import('./produtos/produtos.page').then( m => m.ProdutosPage)
  },

];
