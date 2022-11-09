import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

export interface IToastData {
  type: 'info' | 'success' | 'error' | 'warning';
  message: string;
  subMessage: string;
}

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ToastComponent {
  public types = {
    info: { icon: 'info', background: '#3498db' },
    success: { icon: 'check_circle', background: '#13741d' },
    error: { icon: 'error', background: '#e74c3c' },
    warning: { icon: 'warning', background: '#f1c40f' },
  };

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: IToastData) {}
}
