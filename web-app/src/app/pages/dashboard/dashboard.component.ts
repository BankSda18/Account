import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';

interface NavigationItem {
  name: string;
  type: 'page' | 'action';
  url?: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  icons = {
    faUserAlt,
  };

  navItems: NavigationItem[] = [
    { name: 'Dashboard', type: 'page', url: 'dashboard' },
    { name: 'Timecards', type: 'page', url: 'timecards' },
    { name: 'Reports', type: 'page', url: 'reports' },
    { name: 'Send message', type: 'page', url: 'send-message' },
    { name: 'Support', type: 'action' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  isActive(item: NavigationItem): boolean {
    if (item.type === 'page' && item.name === 'Dashboard') {
      return true;
    }

    return false;
  }

}
