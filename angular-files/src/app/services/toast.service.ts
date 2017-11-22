import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';
@Injectable()
export class ToastService {
    test:any;
  constructor(private snackBar: MatSnackBar) {
    }

    show(msg: string) {
        this.snackBar.open(msg, null, {
            duration: 3000,
        });
    }
}
