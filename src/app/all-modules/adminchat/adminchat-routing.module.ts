import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminchatComponent } from './adminchat.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '',
    component: AdminchatComponent,
    children: [
      { path: 'user', component: ProductComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminchatRoutingModule {}
