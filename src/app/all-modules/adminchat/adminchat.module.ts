import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminchatRoutingModule } from './adminchat-routing.module';
import { AdminchatComponent } from './adminchat.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { FunctioninvokeService } from './functioninvoke.service';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { LinkService } from 'src/app/link.service';
import { ProductComponent } from './products/products.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

@NgModule({
  declarations: [
    AdminchatComponent,
    HeaderComponent,
    SidebarComponent,
    ProductComponent,
    LoginComponent,
  ],
  imports: [CommonModule, AdminchatRoutingModule, PerfectScrollbarModule],
  providers: [
    FunctioninvokeService,
    LinkService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
})
export class AdminchatModule {}
