import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MatTableDataSource } from '@angular/material';
import {Cart} from '../../models/cart';
import {CartService} from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';
import { ChangeDetectorRef } from '@angular/core';
import { of } from 'rxjs/observable/of'
import {Router}  from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CartComponent implements OnInit {
  displayedColumns = ['index', 'product', 'quantity', 'Price'];
  
  dataSource = new MatTableDataSource(this.cartService.cartContent);
  constructor(
    private cartService:CartService,
    private authService:AuthService,
    private cd: ChangeDetectorRef,
    private router:Router) { }

  ngOnInit() {
    if(this.authService.loggedIn())
    this.cartService.retriveCart().subscribe((data)=>{
      if(data.success){
        this.cartService.cartContent=data.msg;
        console.log(data.msg);
        this.router.navigate(['cart']);   
      }
    });
  }
  emptyCart(){
    this.cartService.emptyCart().subscribe(data=>{
      console.log(data);
    });
  }
}
// const ELEMENT_DATA:Cart[] = [
//   {index:1,product:'asd',quantity:2,Price:2}
// ];  