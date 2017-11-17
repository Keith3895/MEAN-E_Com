import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddProductComponent implements OnInit {
  fileup:any;
  constructor() { }

  ngOnInit() {
  }
  AddProduct(productform:any){
    console.log(productform.value);
  }
  test(f){
    console.log(f.value);
    this.fileup=f.value;
  }
}
