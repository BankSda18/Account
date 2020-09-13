import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee, EmployeePaginationAndSortResponse } from '../../shared/model';
import { EmployeesService } from '../../shared/service/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employeesResponse$: Observable<EmployeePaginationAndSortResponse>;

  constructor(private _employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.employeesResponse$ = this._employeesService.getAllEmployees();
  }

}
