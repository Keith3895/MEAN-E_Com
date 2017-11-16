import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {ToastService} from '../../services/toast.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  hide = true;
  constructor(
  	private toastService: ToastService,
  	private authService:AuthService,
  	private router:Router) { }

  ngOnInit() {
  }
  onLogin(cred:any){
  	let user = cred.value;
  	this.authService.authenticateUser(user).subscribe(data=>{
  		if(data.success){
  			this.authService.storeUserData(data.token,data.user);
  			this.router.navigate(['dashboard']);
        this.toastService.show("you are logged in!");
        // this.toastService.show(data.msg);
  		}else{
  			this.toastService.show(data.msg);
  			this.router.navigate(['login']);
  		}
  	});
  }
}
