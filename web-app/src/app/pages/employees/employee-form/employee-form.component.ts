import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageModel } from '../../../shared/model';
import { getPageModel } from '../../../shared/utils';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  pageModel: PageModel;

  constructor(
    private _route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.pageModel = getPageModel(this._route);
  }

}
