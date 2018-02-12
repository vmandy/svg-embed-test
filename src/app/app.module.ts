import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { LogoLeftComponent } from './logo-left/logo-left.component';
import { LogoRightComponent } from './logo-right/logo-right.component';
import { LogoAComponent } from './logo-a/logo-a.component';
import { LogoBComponent } from './logo-b/logo-b.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    LogoLeftComponent,
    LogoRightComponent,
    LogoAComponent,
    LogoBComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
