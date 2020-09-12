import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
  { path: 'create', component: EmployeeFormComponent }, // /employees/create - create
  { path: 'edit', component: NotFoundComponent }, // /employees/create - create
  { path: 'edit/:id', component: EmployeeFormComponent }, // /employees/edit/{id} - edit
  { path: ':id', component: EmployeeFormComponent }, // /employees/{id} - view employee details
  { path: '', component: EmployeesComponent }, // /employees - list of all employees
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
