import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {AuthService} from '../../services/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
	user:any;
  constructor(private authService:AuthService) { }

  ngOnInit() {
  	this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
      console.log(this.user);
    },
    err => {
      console.log(err);
      return false;
    });
  }

}
