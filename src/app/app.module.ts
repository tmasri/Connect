import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  MatCardModule,
  MatInputModule,
  MatButtonModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthFormLogoComponent } from './shared/components/auth-form-logo/auth-form-logo.component';
import { AuthFormComponent } from './shared/components/auth-form/auth-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthFormLogoComponent,
    AuthFormComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
