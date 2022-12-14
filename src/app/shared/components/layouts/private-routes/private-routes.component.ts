import { Component, OnInit } from '@angular/core';
import { ISideNavToggle } from '../../sidebar/sidebar.component';

@Component({
  selector: 'app-private-routes',
  templateUrl: './private-routes.component.html',
  styleUrls: ['./private-routes.component.scss'],
})
export class PrivateRoutesComponent implements OnInit {
  public isSidenavOpen = false;
  public screenWidth = 0;

  constructor() {}

  ngOnInit(): void {}

  public handleToggleSideNav(data: ISideNavToggle) {
    this.isSidenavOpen = data.isOpen;
    this.screenWidth = data.screenWidth;
  }

  public getBodyClass() {
    let styleClass = '';
    if (this.isSidenavOpen && this.screenWidth > 768) {
      styleClass = 'drawer-trimmed';
    } else if (
      this.isSidenavOpen &&
      this.screenWidth <= 768 &&
      this.screenWidth > 0
    ) {
      styleClass = 'drawer-md-screen';
    } else if (!this.isSidenavOpen) {
      styleClass = 'drawer-md-screen';
    }

    return styleClass;
  }
}
