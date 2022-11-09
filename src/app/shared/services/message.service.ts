import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ToastComponent } from '../components/toast/toast.component';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private snackBar: MatSnackBar) {}

  public show(
    type: 'info' | 'success' | 'error' | 'warning',
    message = '',
    subMessage = ''
  ) {
    this.snackBar.openFromComponent(ToastComponent, {
      duration: 3500,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      data: {
        type,
        message,
        subMessage,
      },
    });
  }
}
