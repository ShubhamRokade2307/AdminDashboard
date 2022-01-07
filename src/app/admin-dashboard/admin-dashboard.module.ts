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
// import { CoreModule } from '@angular/flex-layout';
import { CoreModule } from '../core/core.module';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MenusComponent } from './menus/menus.component';


import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';

import { SolutionsModule } from './solutions/solutions.module';
import { ProductsModule } from './products/products.module';
import { CommonModuleModule } from './common-module/common-module.module';
import { HomeModule } from './home/home.module';
import { AboutusModule } from './aboutus/aboutus.module';

@NgModule({
  declarations: [MenusComponent],
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
    NgScrollbarModule,

    FlexLayoutModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatTabsModule,
    MatRadioModule,
    MatToolbarModule,
    MatListModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    // HighlightModule,
    // MaterialWidgetsRouterModule

   
    SolutionsModule,
    ProductsModule,
    HomeModule,
    AboutusModule,

    CommonModuleModule
  ]
})
export class AdminDashboardModule {}
