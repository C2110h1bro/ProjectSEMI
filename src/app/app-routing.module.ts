import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LogonComponent } from './logon/logon.component';

const routes: Routes = [
  { path: 'admin', canActivate: [AuthGuard], loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule) },
  { path: '', loadChildren: () => import('./customer/customer.module').then((m) => m.CustomerModule) },
  { path: 'logon', component: LogonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
