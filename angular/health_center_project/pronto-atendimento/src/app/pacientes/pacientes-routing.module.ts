import { Routes } from '@angular/router';

import { ListarPacienteComponent } from './listar';
import { CadastrarPacienteComponent } from './cadastrar';
import { EditarpacientesComponent } from './editar';

export const PacientesRoutes: Routes = [
    {
        path: 'pacientes',
        redirectTo: 'pacientes/listar'
    },
    {
        path: 'pacientes/listar',
        component: ListarPacienteComponent
    },
    {
        path: 'pacientes/cadastrar',
        component: CadastrarPacienteComponent
    },
    {
        path: 'pacientes/editar/:id',
        component: EditarpacientesComponent
    }
];
