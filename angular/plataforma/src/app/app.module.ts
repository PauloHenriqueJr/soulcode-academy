import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header';
import { HomeComponent } from './home';
import { DashboardComponent } from './dashboard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SidenavComponent } from './sidenav';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { Aula01Component } from './aula01/aula01.component';
import { Aula02Component } from './aula02/aula02.component';
import { Aula03Component } from './aula03/aula03.component';
import { Aula04Component } from './aula04/aula04.component';
import { Aula05Component } from './aula05/aula05.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    SidenavComponent,
    Aula01Component,
    Aula02Component,
    Aula03Component,
    Aula04Component,
    Aula05Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    YouTubePlayerModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
