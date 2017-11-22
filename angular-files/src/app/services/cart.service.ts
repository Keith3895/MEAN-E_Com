import { Injectable } from '@angular/core';
import {Cart} from '../models/cart';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {AuthService} from './auth.service';
@Injectable()
export class CartService {
  cartContent: Cart[]=[];
  constructor(
    private authService : AuthService,
    private http:Http
  ) { }
  addToCart(product,qty){
    let newCartEntry = {
      index: this.cartContent.length,
      product:product,
      quantity: qty,
      Price:product.price};
    
      
    if(this.authService.loggedIn()){
      this.retriveCart().subscribe(data=>{
        if(data.success){
          this.cartContent=data.msg;
          console.log(data.msg);
        }
      });
      this.addToCartServer(newCartEntry).subscribe(data=>{
        if(data.success){
          this.cartContent.push(newCartEntry);
          console.log(data.msg);
        }else{
          console.log(data.msg);
        }
      });
    }
    else
    this.cartContent.push(newCartEntry);
  }
  addToCartServer(Entry){
    let headers = new Headers();
    headers.append('Content-type','application/json');
    this.authService.loadToken();
    headers.append('Authorization', this.authService.authToken);
    let ep = this.authService.prepEndpoint('cart/addEntry');
    Entry.author=this.authService.user._id;
    return this.http.post(ep,Entry,{headers: headers})
      .map(res => res.json());
  }
  retriveCart(){
    let headers = new Headers();
    this.authService.loadToken();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type','application/json');
    let ep = this.authService.prepEndpoint('cart/getCart/'+this.authService.user._id);
    return this.http.get(ep,{headers: headers})
      .map(res => res.json());
  }
  emptyCart(){
    let headers = new Headers();
    headers.append('Content-type','application/json');
    this.authService.loadToken();
    headers.append('Authorization', this.authService.authToken);
    let ep = this.authService.prepEndpoint('cart/emptyCart');
    return this.http.post(ep,{id:this.authService.user._id},{headers: headers})
      .map(res => res.json());
  }
}
