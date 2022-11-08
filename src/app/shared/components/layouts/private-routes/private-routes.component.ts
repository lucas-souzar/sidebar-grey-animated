import { Component, OnInit } from '@angular/core';
import { ISideNavToggle } from '../../sidebar/sidebar.component';

@Component({
  selector: 'app-private-routes',
  templateUrl: './private-routes.component.html',
  styleUrls: ['./private-routes.component.scss'],
})
export class PrivateRoutesComponent implements OnInit {
  public isSidenavOpen = false;
  public screebWidth = 0;

  constructor() {}

  ngOnInit(): void {}

  public handleToggleSideNav(data: ISideNavToggle) {
    this.isSidenavOpen = data.isOpen;
    this.screebWidth = data.screenWidth;
  }

  public getBodyClass() {
    let styleClass = '';
    if (this.isSidenavOpen && this.screebWidth > 768) {
      styleClass = 'body-trimmed';
    } else if (
      this.isSidenavOpen &&
      this.screebWidth <= 768 &&
      this.screebWidth > 0
    ) {
      styleClass = 'body-md-screen';
    }

    return styleClass;
  }
}
