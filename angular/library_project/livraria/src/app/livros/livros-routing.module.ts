import { Routes } from '@angular/router';

import { ListarLivroComponent } from './listar';
import { CadastrarLivroComponent } from './cadastrar';
import { EditarLivroComponent } from './editar';

export const LivrosRoutes: Routes = [
  {
    path: 'livros',
    redirectTo: 'livros/listar',
  },
  {
    path: 'livros/listar',
    component: ListarLivroComponent,
  },
  {
    path: 'livros/cadastrar',
    component: CadastrarLivroComponent,
  },
  {
    path: 'livros/editar',
    component: EditarLivroComponent,
  },
];
