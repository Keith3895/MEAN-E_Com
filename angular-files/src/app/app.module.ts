import { BrowserModule } from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from "@angular/flex-layout";
import { FileUploadModule } from 'ng2-file-upload';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatStepperModule} from '@angular/material/stepper';
import {MatListModule} from '@angular/material/list';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { BuyerComponent } from './components/dashboard/buyer/buyer.component';
import { SellerComponent } from './components/dashboard/seller/seller.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { BuyBillComponent } from './components/buy-bill/buy-bill.component';
import { FooterComponent } from './components/footer/footer.component';

import {AuthService} from './services/auth.service';
import {ValidateService} from './services/validate.service';
import {ToastService} from './services/toast.service';
import {AuthGuard} from './guards/auth.guard';
import {ProductService} from './services/product.service';
import {CartService} from './services/cart.service';
import { PipePipe } from './pipe.pipe';







const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'productDetail/:id', component: ProductDetailComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cart', component: CartComponent },
  { path: 'buy', component: BuyBillComponent },
  { path: 'dashboard', component: DashboardComponent ,canActivate:[AuthGuard]},
  { path: 'addProduct', component: AddProductComponent ,canActivate:[AuthGuard]}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    DashboardComponent,
    AddProductComponent,
    BuyerComponent,
    SellerComponent,
    HomeComponent,
    ProductDetailComponent,
    CartComponent,
    BuyBillComponent,
    FooterComponent,
    PipePipe,

    

  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
     HttpModule ,  
    FlexLayoutModule,
    FileUploadModule ,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatTableModule,
    MatDialogModule,
    MatStepperModule,
    MatListModule,
    
  ],
  exports: [ RouterModule ],
  providers: [
  AuthService,
  ValidateService,
  ToastService,
  ProductService,
  CartService,
  AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
