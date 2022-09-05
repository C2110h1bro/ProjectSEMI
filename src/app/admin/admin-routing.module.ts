import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './component/category/add-category/add-category.component';
import { ListCategoryComponent } from './component/category/list-category/list-category.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AddProductComponent } from './component/product/add-product/add-product.component';
import { ListProductComponent } from './component/product/list-product/list-product.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: 'category', component: ListCategoryComponent },
      { path: 'add-category', component: AddCategoryComponent },
      { path: 'product', component: ListProductComponent },
      { path: 'add-product', component: AddProductComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
