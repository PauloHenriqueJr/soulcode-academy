import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TemperaturaService } from '../services';
import { IConversao } from '../models';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  title = 'Conversor de Temperaturas';

  @ViewChild("converteForm", {static:true})conversaoForm:NgForm;

  conversao?: IConversao = {
    tipo: '',
    valor: 0
  }

  statusConversao: boolean = false
  msg: string | string = ''
  temperaturaConvertida?: number | string = ''

  constructor(private temperaturaService: TemperaturaService) { }

  ngOnInit() {
  }

  converter() {
    let conversaoInput = this.conversao
    this.temperaturaConvertida = this.temperaturaService.converter(conversaoInput)
    this.statusConversao = true
    this.criarMensagem()

  }

  criarMensagem(){

    this.msg = "O resultado da conversão solicitada é: "
    let tipo = this.conversao.tipo
    let tipoArr = tipo.split('-')

    if(tipoArr[1] == 'kelvin'){
      this.msg += `${this.temperaturaConvertida} K `
      return
    }
    let sigla = tipoArr[1][0].toUpperCase()
    this.msg += `${this.temperaturaConvertida} °${sigla}`
  }

}
