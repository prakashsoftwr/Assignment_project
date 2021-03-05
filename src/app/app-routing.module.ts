import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login-main',
    pathMatch: 'full',
  },
  {
    path: 'login-main',loadChildren: () =>import(`./login-main/login-main.module`).then((m) => m.LoginMainModule),
  },
  // { path: "login", component: LoginComponent },
  // { path: "register", component: RegisterComponent },
  // { path: "forgotpassword", component: ForgotpasswordComponent },
  // { path: "errorpage", component: ErrorpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
