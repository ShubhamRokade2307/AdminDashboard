import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from '../core/sidebar/sidebar.component';
import { MenusComponent } from './menus/menus.component';

const routes: Routes = [
  {
    path:"",
    component: MenusComponent,
   }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
