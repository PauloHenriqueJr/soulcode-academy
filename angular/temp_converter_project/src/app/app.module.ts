import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConversorModule } from './conversor';
import { FooterComponent } from './footer';
import { HeaderComponent } from './header';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ConversorModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
