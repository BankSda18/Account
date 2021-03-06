import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [EmployeesComponent, EmployeeFormComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    SharedModule,
  ]
})
export class EmployeesModule { }
