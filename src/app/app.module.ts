import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LazyLoadModule } from './lazy-load/lazy-load.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { AdminDashboardModule } from './admin-dashboard/admin-dashboard.module';

// import { Module } from  '@angular/fire';
// import { AngularFirestoreModule } from  '@angular/fire/firestore';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    LazyLoadModule,
    CoreModule,
    BrowserAnimationsModule,
    AdminDashboardModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
