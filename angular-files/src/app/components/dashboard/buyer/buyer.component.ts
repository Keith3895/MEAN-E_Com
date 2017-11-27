import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ObservableMedia, MediaChange} from '@angular/flex-layout';
import { CartService } from '../../../services/cart.service';
import {AuthService} from '../../../services/auth.service';
@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BuyerComponent implements OnInit {
  
  hide:Boolean;
  isMobileView:Boolean;
  side:any;
  constructor(public media:ObservableMedia,
  public cartService:CartService,
  public authService: AuthService) { }

  ngOnInit() {
    this.isMobileView = (this.media.isActive('xs') || this.media.isActive('sm'));
    this.media.subscribe((change:MediaChange) => {
      this.isMobileView = (change.mqAlias === 'xs' || change.mqAlias === 'sm');
      this.hide = this.isMobileView;
      if(this.isMobileView)
        this.side = 'over';
      else
      this.side = 'side';
    });
    this.hide = this.isMobileView;
    this.cartService.retriveCart().subscribe((data)=>{
      if(data.success){
        this.cartService.cartContent=data.msg;
      }
    });
  }

}
