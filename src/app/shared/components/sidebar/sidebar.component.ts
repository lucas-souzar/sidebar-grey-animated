import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';

import { menu } from './sidebar.data';

export interface ISideNavToggle {
  screenWidth: number;
  isOpen: boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.isOpen = false;
      this.onToggleSideNav.emit({
        isOpen: this.isOpen,
        screenWidth: this.screenWidth,
      });
    }
  }

  @Output() onToggleSideNav: EventEmitter<ISideNavToggle> = new EventEmitter();

  public isOpen = false;
  public screenWidth = 0;
  public menuItems = menu;

  constructor() {}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;

    this.onToggleSideNav.emit({
      isOpen: this.isOpen,
      screenWidth: this.screenWidth,
    });
  }

  public openSidenav() {
    this.isOpen = !this.isOpen;
    this.onToggleSideNav.emit({
      isOpen: this.isOpen,
      screenWidth: this.screenWidth,
    });
  }

  public closeSidenav() {
    this.isOpen = false;
    this.onToggleSideNav.emit({
      isOpen: this.isOpen,
      screenWidth: this.screenWidth,
    });
  }
}
