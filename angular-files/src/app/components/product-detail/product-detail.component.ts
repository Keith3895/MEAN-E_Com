import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ToastService} from '../../services/toast.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailComponent implements OnInit {
  id:any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastService:ToastService,
    private location: Location
  ) { }

  
    ngOnInit() {
      this.id = this.route.snapshot.paramMap.get('id');
      // console.log(this.toastService.test);
      if(!this.toastService.test || this.id!=this.toastService.test._id)
        this.location.back();
    }
  
   
  

}
