import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './hr/employee/employee.component';
import { ExportComponent } from './hr/export/export.component';
import { HomeComponent } from './hr/home/home.component';
import { AddEmployeeComponent } from './hr/employee/add-employee/add-employee.component';


const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: LINK_PHONPHISAI,
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'export',
    component: ExportComponent
  },
  {
    path: 'addemp',
    component: EmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
