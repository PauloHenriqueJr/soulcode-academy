import { Aula05Component } from './aula05/aula05.component';
import { Aula04Component } from './aula04/aula04.component';
import { Aula03Component } from './aula03/aula03.component';
import { Aula02Component } from './aula02/aula02.component';
import { Aula01Component } from './aula01/aula01.component';
import { HomeComponent } from './home';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard';

const routes: Routes = [
  {path:'', redirectTo: 'sobre', pathMatch: 'full'},
  {path:'sobre', component:HomeComponent},
  {path:'descricao', component:DashboardComponent},
  {path:'aula01', component:Aula01Component },
  {path:'aula02', component:Aula02Component },
  {path:'aula03', component:Aula03Component },
  {path:'aula04', component:Aula04Component },
  {path:'aula05', component:Aula05Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
