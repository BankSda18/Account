import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../shared/service/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  constructor(private _employeesService: EmployeesService) { }

  ngOnInit(): void {
    console.log('before this._employeesService.getAllEmployees();');
    this._employeesService.getAllEmployees().subscribe(
      success => {
        console.log('get success - result: ', success);
      },
      error => {
        console.error('get errored: ', error);
      },
      () => console.log('get completed'),
    );
  }

}
