import { LivroConcluidaDirective } from './shared/livro-concluida.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LivroService } from './shared';
import { ListarLivroComponent } from './listar';
import { CadastrarLivroComponent } from './cadastrar';
import { EditarLivroComponent } from './editar/editar-livro.component';



@NgModule({
  declarations: [
    ListarLivroComponent,
    CadastrarLivroComponent,
    EditarLivroComponent,
    LivroConcluidaDirective,
    EditarLivroComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    LivroService
  ]
})
export class LivrosModule { }
