import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { HomeComponent } from './page/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RegisterComponent } from './page/register/register.component';
import { MaterviewComponent } from './page/materview/materview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './page/login/login.component';
import { CartComponent } from './page/cart/cart.component';
import { HeaderComponent } from './layout/header/header.component';


@NgModule({
  declarations: [
    HomeComponent,
    RegisterComponent,
    MaterviewComponent,
    LoginComponent,
    CartComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    // BrowserAnimationsModule,
    CarouselModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CustomerModule { }
