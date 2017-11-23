import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {AuthService} from '../../services/auth.service';
import {ToastService} from '../../services/toast.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-buy-bill',
  templateUrl: './buy-bill.component.html',
  styleUrls: ['./buy-bill.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BuyBillComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<BuyBillComponent>,
    private toastService: ToastService,
  	private authService:AuthService,
    private router:Router,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    // this.dialogRef.close();    
    this.firstFormGroup = this._formBuilder.group({
      username: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
