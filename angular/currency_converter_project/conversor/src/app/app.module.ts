import { FormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from "./app.component";
import { ConversorModule, MoedaService } from "./conversor";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ConversorModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MoedaService],
  bootstrap: [AppComponent]
})
export class AppModule {}
