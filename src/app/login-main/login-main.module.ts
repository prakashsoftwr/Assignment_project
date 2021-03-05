import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginMainRoutingModule } from './login-main-routing.module';
import { LoginMainComponent } from './login-main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FunctioninvokeService } from '../all-modules/adminchat/functioninvoke.service';
import { LinkService } from '../link.service';
import { PerfectScrollbarConfigInterface, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};
@NgModule({
  declarations: [LoginMainComponent],
  imports: [
    CommonModule,
    LoginMainRoutingModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [
    FunctioninvokeService,
    LinkService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
})
export class LoginMainModule { }
