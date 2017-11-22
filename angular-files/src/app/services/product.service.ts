import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ProductService {
  isDev:Boolean;
  constructor(private http:Http) {
    this.isDev=true;
   }
  addProduct(Product){
    let headers = new Headers();
  	headers.append('Content-type','application/json');
  	let ep = this.prepEndpoint('seller/addProduct');
    return this.http.post(ep,Product,{headers: headers})
      .map(res => res.json());
  }
  AllProduct(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('buyer/allProducts');
    return this.http.get(ep,{headers: headers})
      .map(res => res.json());
  }
  prepEndpoint(ep){
    if(!this.isDev){
      return ep;
    } else {
      return 'http://localhost:8080/'+ep;
    }
  }
}
