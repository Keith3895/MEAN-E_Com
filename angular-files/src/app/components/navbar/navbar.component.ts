import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router}  from '@angular/router';
import {ToastService} from '../../services/toast.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  constructor(
  	private router: Router,
  	private toastService:ToastService,
  	private authService:AuthService) { }

  ngOnInit() {
  }
  isVisibleOnDesktop(){}
  onLogout(){
  	this.authService.logout();
  	this.toastService.show('you have been logged out');
  	this.router.navigate(['']);
  }
}
