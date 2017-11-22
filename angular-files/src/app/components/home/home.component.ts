import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {ToastService} from '../../services/toast.service';
import { Router } from '@angular/router';
import { CartService} from '../../services/cart.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  products:any;
  constructor(
    private productService: ProductService,
    private toastService : ToastService,
    private router : Router,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.productService.AllProduct().subscribe(data=>{
      if(data.success){
        this.products=data.products;
        
      }else{
        this.toastService.show(data.msg);
      }
    });
    console.log(this.products);
  }
  moreInfo(product){
    console.log(product);
    // product=  JSON.stringify(product);
    this.router.navigate(['/productDetail/'+product._id]);
    this.toastService.test=product;
    // this._router.navigate(['SecondComponent', {p1: this.property1, p2: property2 }]);
    
  }
  addItem(product){
    
    this.cartService.addToCart(product,1);
  }
}
