import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SellerComponent implements OnInit {

  constructor(
    public authService : AuthService
  ) { }

  ngOnInit() {
  }

}
