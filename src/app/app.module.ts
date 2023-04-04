import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {WebcamModule} from 'ngx-webcam';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReportFormComponent } from './report-form/report-form.component';
import { SignupComponent } from './signup/signup.component';
import { FormpageComponent } from './formpage/formpage.component';


import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReportFormComponent,
    SignupComponent,
    FormpageComponent
  ],
  imports: [
    BrowserModule,
    WebcamModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
