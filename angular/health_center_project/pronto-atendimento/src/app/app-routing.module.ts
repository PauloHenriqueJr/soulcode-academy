import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacientesRoutes } from './pacientes'

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/pacientes/listar',
        pathMatch: 'full'
    },
    ...PacientesRoutes
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
