import { State, Action, Selector, StateContext } from '@ngxs/store';
import { patch } from '@ngxs/store/operators';
import { FetchEmployees } from './employees.actions';
import { Employee } from '../../model';
import { Injectable } from '@angular/core';
import { EmployeesService } from '../../service/employees.service';
import { tap } from 'rxjs/operators';

export interface EmployeesStateModel {
  employees: Employee[];
  recentlyAddedEmployees: Employee[];
  recentlyDeletedEmployees: Employee[];
}

@State<EmployeesStateModel>({
  name: 'employees',
  defaults: {
    employees: [],
    recentlyAddedEmployees: [],
    recentlyDeletedEmployees: [],
  }
})
@Injectable()
export class EmployeesState {

  @Selector()
  public static getEmployees(state: EmployeesStateModel): Employee[] {
    return state.employees;
  }

  @Selector()
  public static getEmployeeById(state: EmployeesStateModel): (id: string) => Employee {
    return (id: string): Employee => {
      return state.employees.find(employee => employee.id === id);
    };
  }

  @Selector()
  public static getRecentlyAddedEmployees(state: EmployeesStateModel): Employee[] {
    return state.recentlyAddedEmployees;
  }

  @Selector()
  public static getRecentlyDeletedEmployees(state: EmployeesStateModel): Employee[] {
    return state.recentlyAddedEmployees;
  }

  constructor(private _employeeService: EmployeesService) { }

  @Action(FetchEmployees)
  public fetchEmployees(ctx: StateContext<EmployeesStateModel>): any {

    return this._employeeService.getAllEmployees().pipe(
      tap(response => {
        ctx.patchState({ employees: response.content });
      }),
    );
  }

}
