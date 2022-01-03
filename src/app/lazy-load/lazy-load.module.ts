import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
 
import { AuthModule } from '../auth/auth.module';

const routes: Routes = [   
    {path: 'auth', loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)},
    {path: 'register', loadChildren: () => import('../register/register.module').then(m => m.RegisterModule)},
    {path: 'login', loadChildren: () => import('../pages/login/login.module').then(m => m.LoginModule)},
   
    {path: 'dashboard', loadChildren: () => import('../admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule)},

    {path: '**', redirectTo: 'auth/dashboard'},
   
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class LazyLoadModule { }
