import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';

// import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { DashboardCrmModule } from '../dashboard-crm/dashboard-crm.module';
import { CoreModule } from '@angular/flex-layout';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MenusComponent } from './menus/menus.component';

@NgModule({
  declarations: [
  
  
    MenusComponent,
    
  ],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,

    MatToolbarModule,
    DashboardCrmModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    CoreModule,
    MatSidenavModule,
    // PerfectScrollbarModule,
    NgScrollbarModule
  ]
})
export class AdminDashboardModule { }
