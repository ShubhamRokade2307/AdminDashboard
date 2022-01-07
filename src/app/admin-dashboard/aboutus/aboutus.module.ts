import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutBannerComponent } from './about-banner/about-banner.component';
import { AboutServicesForBusinessComponent } from './about-services-for-business/about-services-for-business.component';
import { AboutWorkingProcessComponent } from './about-working-process/about-working-process.component';
import { AboutLatestVideosComponent } from './about-latest-videos/about-latest-videos.component';

import { CommonModuleModule } from '../common-module/common-module.module';

import { AdminDashboardRoutingModule } from '../admin-dashboard-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { NgScrollbarModule } from 'ngx-scrollbar';
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
import { MatTableModule } from '@angular/material/table';
import { DashboardCrmModule } from '../../dashboard-crm/dashboard-crm.module';
import { CoreModule } from '../../core/core.module';

import { AdminDashboardModule } from '../admin-dashboard.module';

@NgModule({
  declarations: [
    AboutBannerComponent,
    AboutServicesForBusinessComponent,
    AboutWorkingProcessComponent,
    AboutLatestVideosComponent
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
    MatTableModule


  ]
})
export class AboutusModule { }
