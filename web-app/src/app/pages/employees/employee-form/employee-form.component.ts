import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageModel, PAGE_MODE } from '../../../shared/model';
import { getPageModel } from '../../../shared/utils';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { EmployeesState } from '../../../shared/state/employees/employees.state';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  pageModel: PageModel;
  employeeForm: FormGroup;

  constructor(
    private _route: ActivatedRoute,
    private _fb: FormBuilder,
    private _store: Store,
  ) { }

  ngOnInit(): void {
    this.pageModel = getPageModel(this._route);
    this.initForm();
  }

  private initForm(): void {

    this.employeeForm = this._fb.group({
      id: [],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      dateOfBirth: [],
      phoneNumber: [],
      email: [],
      status: [],
      company: [],

      address: this._fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      }),
    });

    if (this.pageModel.pageMode !== PAGE_MODE.CREATE) {
      const employee = this._store.selectSnapshot(EmployeesState.getEmployeeById)(this.pageModel.id);
      console.log('employee: ', employee);
      this.employeeForm.patchValue(employee);
    }

    if (this.pageModel.pageMode === PAGE_MODE.DETAILS) {
      this.employeeForm.disable();
    }

  }

}
