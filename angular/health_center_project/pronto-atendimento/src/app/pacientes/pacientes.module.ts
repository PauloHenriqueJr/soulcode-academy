import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PacienteService, PacienteAtendidoDirective } from './shared';
import { ListarPacienteComponent } from './listar';
import { CadastrarPacienteComponent } from './cadastrar';
import { EditarpacientesComponent } from './editar';


@NgModule({
  declarations: [
    ListarPacienteComponent,
    CadastrarPacienteComponent,
    EditarpacientesComponent,
    PacienteAtendidoDirective
  ],

  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers:[
    PacienteService
  ]
})
export class PacientesModule { }
