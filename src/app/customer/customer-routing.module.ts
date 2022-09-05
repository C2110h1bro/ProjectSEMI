import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './page/cart/cart.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { MaterviewComponent } from './page/materview/materview.component';
import { RegisterComponent } from './page/register/register.component';

const routes: Routes = [
  {
    path: '', component: MaterviewComponent, children: [
      { path: '', component: HomeComponent, },
      { path: 'cart', component: CartComponent, },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
