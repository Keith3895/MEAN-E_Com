import { BrowserModule } from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from "@angular/flex-layout";
import { FileUploadModule } from 'ng2-file-upload';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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



import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddProductComponent } from './components/add-product/add-product.component';

import {AuthService} from './services/auth.service';
import {ValidateService} from './services/validate.service';
import {ToastService} from './services/toast.service';
import {AuthGuard} from './guards/auth.guard';
import {ProductService} from './services/product.service';


import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
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

  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
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
    MatProgressSpinnerModule
    
  ],
  exports: [ RouterModule ],
  providers: [
  AuthService,
  ValidateService,
  ToastService,
  ProductService,
  AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
