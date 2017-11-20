import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

import {ProductService} from '../../services/product.service';
import {ValidateService} from '../../services/validate.service';
import {ToastService} from '../../services/toast.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddProductComponent implements OnInit {
  fileup:any;
  fileList:any;
  showSpinner=false;
  uploader= new FileUploader({ url:'http://localhost:8080/seller/upload/' });
  constructor(private productService:ProductService,
  private validateService : ValidateService,
  private toastService :ToastService,
  private router:Router) { 
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      var responsePath = JSON.parse(response);
      this.fileList=responsePath.fileName;
      };
  }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
  }
  AddProduct(productform:any){
    this.showSpinner=true;
    productform.value.fileList=this.fileList;
    productform=productform.value;
    var usr=localStorage.getItem('user') ;
    usr=JSON.parse(usr);
    productform.author=usr._id;
    console.log(productform);
    if(!this.validateService.validateAddProductPrice(productform)){
      this.toastService.show("please fill the price");
      this.showSpinner = false;
      return false;
    }
    if(!this.validateService.validateAddProductSock(productform)){
      this.toastService.show("please fill the stock");
      this.showSpinner = false;
      return false;
    }
    this.productService.addProduct(productform).subscribe(data=>{
      if(data.success){
        this.showSpinner=false;
        this.router.navigate(['/dashboard']);
      }else{
        this.showSpinner=false;
        this.toastService.show(data.msg);
      }
    });
  }
  fileUp(){
    this.fileup = this.uploader.queue[0].file.name;
    this.fileList= this.uploader.queue[0];
    this.fileList.upload();
  }
  setSpinner(){
    if(this.showSpinner)
      return 'block'; 
    else  
      return 'none';
  }
}
