import { DefaultComponent } from './default/default.component';
import { DashboardCovidComponent } from './dashboard/dashboard-covid.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{

    path: '',
    component: DashboardCovidComponent

  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
