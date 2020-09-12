import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { EmployeePaginationAndSortResponse } from '../model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private host = environment.host;
  private employeeService = `${this.host}/api/v1/employees-service`;
  private baseEmployeesUrl = `${this.employeeService}/employees`;

  constructor(private _http: HttpClient) { }

  getAllEmployees(): Observable<EmployeePaginationAndSortResponse> {
    return this._http.get<EmployeePaginationAndSortResponse>(this.baseEmployeesUrl);
  }
}
