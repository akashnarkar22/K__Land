import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Component/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',  // ✅ Ensures it's at the top-right
      preventDuplicates: true,
      closeButton: true,
      timeOut: 3000,
    }),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
