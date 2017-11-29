import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router}  from '@angular/router';
// import { RouterLinkActive } from '@angular/router';
import {ToastService} from '../../services/toast.service';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  hide:Boolean;
  isMobileView:Boolean;
  side:any;
  constructor(
    private router: Router,
  	private toastService:ToastService,
    private authService:AuthService,
    public media:ObservableMedia) { }

  ngOnInit() {
    // this.authService.user=false;
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
  }
  isVisibleOnDesktop(){}
  onLogout(){
  	this.authService.logout();
  	this.toastService.show('you have been logged out');
  	this.router.navigate(['']);
  }
}
 