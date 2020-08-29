import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild('navbarNav') navbarNavRef: ElementRef;

  icons = {
    faUserAlt,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
