import { Injectable } from '@angular/core';
import {ToastService} from './toast.service';
@Injectable()
export class ValidateService {

  constructor(private toastService:ToastService) { }
  validateEmail(email){
  	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  validatePassword(password,rePassword){
  		if(password === rePassword)
  			return true;
  		else
  			return false;
  }
  validateRegister(user){
    if(user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined){
      return false;
    } else {
      return true;
    }
  }
}
