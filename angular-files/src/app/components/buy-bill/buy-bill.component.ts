import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {AuthService} from '../../services/auth.service';
import {ToastService} from '../../services/toast.service';
import {Router} from '@angular/router';
import { CartService } from '../../services/cart.service';
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
    private formBuilder: FormBuilder,
    private cartService: CartService
  ) { }

  ngOnInit() {
    let username= this.authService.user?this.authService.user.username:'';
    this.firstFormGroup = this.formBuilder.group({
      username: [username, Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  done(){
    if(this.authService.loggedIn()){
      this.cartService.Buy().subscribe(data=>{
        if(data.success)
          this.toastService.show('Your Order Is Placed');
          this.cartService.cartContent=[];
          this.cartService.Total=this.cartService.GTotal=0;
          this.router.navigate(['dashboard']);
      });
    }else{
      this.toastService.show('you have to login to continue');
      this.router.navigate(['login']);
    }
    this.dialogRef.close();
  }
}
