import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HeaderComponent } from './component/layouts/header/header.component';
import { SidebarComponent } from './component/layouts/sidebar/sidebar.component';
import { ListCategoryComponent } from './component/category/list-category/list-category.component';
import { AddCategoryComponent } from './component/category/add-category/add-category.component';
import { ListProductComponent } from './component/product/list-product/list-product.component';
import { AddProductComponent } from './component/product/add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    ListCategoryComponent,
    AddCategoryComponent,
    ListProductComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
