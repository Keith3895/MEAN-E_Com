import { Component, OnInit, ViewEncapsulation,Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MatTableDataSource } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { BuyBillComponent } from '../buy-bill/buy-bill.component';

import {Cart} from '../../models/cart';
import {CartService} from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';
import { of } from 'rxjs/observable/of'
import {Router}  from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CartComponent implements OnInit {
  
  displayedColumns = ['index', 'product', 'quantity', 'Price','actions'];
  Total=0;
  GTotal=0;
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
          for(let i in this.cartService.cartContent){
              this.Total+=this.cartService.cartContent[i].Price;      
          }
          this.GTotal=this.Total;
  
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
    });
  }
  removeItem(item){
    this.cartService.removeItem(item);
    this.dataSource=new MatTableDataSource(this.cartService.cartContent);
  }
  openDialog(): void {
    let dialogRef = this.dialog.open(BuyBillComponent, {
      
      
    });
    
}
