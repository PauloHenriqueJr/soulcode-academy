import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivrosRoutes } from './livros/livros-routing.module';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'livros/listar',
    pathMatch:'full'  //redireciona direto pra pasta raiz
},
...LivrosRoutes  //faz um merge das rotas de livros-routing.module aqu
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
