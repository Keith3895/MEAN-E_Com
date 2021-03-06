import { Component, OnInit, ViewEncapsulation,Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MatTableDataSource } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { BuyBillComponent } from '../buy-bill/buy-bill.component';

import {Cart} from '../../models/cart';
import {CartService} from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';
import {Router}  from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CartComponent implements OnInit {
  
  displayedColumns = ['index', 'product', 'quantity', 'Price','actions'];
  Total=this.cartService.Total;
  GTotal=this.cartService.GTotal;
  dataSource:any;  
  constructor(
    private cartService:CartService,
    private authService:AuthService,
    private router:Router,
    public dialog: MatDialog) {
      
     }

  ngOnInit() {
    if(this.authService.loggedIn()){
      this.cartService.retriveCart().subscribe((data)=>{
        if(data.success){
          this.cartService.cartContent=data.msg;
          this.dataSource=new MatTableDataSource(this.cartService.cartContent);
          
  
        }
      });
    }else{
      this.dataSource=new MatTableDataSource(this.cartService.cartContent);
    }
    
  }
  ngAfterViewInit(){

  }
  emptyCart(){
    this.cartService.emptyCart().subscribe(data=>{
      console.log(data);
      this.dataSource=new MatTableDataSource(this.cartService.cartContent);
    });
  }
  removeItem(item){
    this.cartService.removeItem(item);
    this.dataSource=new MatTableDataSource(this.cartService.cartContent);
  }
  openDialog(): void {
    let dialogRef = this.dialog.open(BuyBillComponent, {});
  }
}
