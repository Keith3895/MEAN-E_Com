import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {AuthService}  from '../../services/auth.service'; 
import {Router} from '@angular/router';
import {ValidateService} from '../../services/validate.service';
import {ToastService} from '../../services/toast.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  hide=true;
  buyer=false;
  constructor(
  	private authService:AuthService,
  	private router:Router,
    private toastService: ToastService,
    private validateService:ValidateService) { }

  ngOnInit() {
  }
  onFormSubmit(userForm: any) {
    console.log(userForm.value);
    const user = userForm.value;
    console.log(this.buyer);
    if(!this.validateService.validateRegister(user)){
      this.toastService.show("Please fill all the fields");
      return false;
    }
    if(!this.validateService.validateEmail(user.email)){
      this.toastService.show("Please enter a valid email address");
      return false;
    }
    console.log(this.validateService.validatePassword(user.password,user.reEnterPassword));

    if(!this.validateService.validatePassword(user.password,user.reEnterPassword)){
      this.toastService.show("Passwords do not match");
      return false; 
    }

    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
        // this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
        this.toastService.show('You are now registered and can log in');
        this.router.navigate(['/login']);
      } else {
        // this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.toastService.show(data.msg);
        this.router.navigate(['/register']);
      }
    });
  }
}
