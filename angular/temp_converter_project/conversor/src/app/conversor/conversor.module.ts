import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversorComponent } from './components';
import { TemperaturaService } from './services';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ConversorComponent
  ],

  imports: [
    CommonModule,
    FormsModule
  ],

  exports: [
    ConversorComponent
  ], 

  providers: [
    TemperaturaService
  ]
})

export class ConversorModule { }
