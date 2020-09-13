import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Employee } from '../../shared/model';
import { FetchEmployees } from '../../shared/state/employees/employees.actions';
import { EmployeesState } from '../../shared/state/employees/employees.state';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  @Select(EmployeesState.getEmployees) employees$: Observable<Employee[]>;

  constructor(private _store: Store) { }

  ngOnInit(): void {
    this._store.dispatch(new FetchEmployees());
  }

}
