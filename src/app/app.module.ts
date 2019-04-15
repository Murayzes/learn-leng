import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';

import { AuthModule } from './auth/auth.module';
import { appRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './shared/services/auth.service';
import { SystemModule } from './system/system.module';
import { ErrorInterceptor } from './shared/helpers/error.interceptor';
import { CookieService } from 'ngx-cookie-service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthModule,
    appRoutingModule,
    SystemModule,
    MatMenuModule,
  ],
  providers: [
    AuthService,
    CookieService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
