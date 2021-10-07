import { Injectable } from '@angular/core';
import { ITemperatura, IConversao } from '../models';

@Injectable(
//   {
//   providedIn: 'root'
// }
)

export class TemperaturaService {

  public temperatura : ITemperatura;

  public tipoConversao: string;

  converter(conversao: IConversao): number | string{

    this.tipoConversao = conversao.tipo
    let result: number | string;

    switch(this.tipoConversao) {
      case 'celsius-fahrenheit':
        result = conversao.valor * 1.8 + 32
        break
      case 'celsius-kelvin':
        result = conversao.valor + 273
        break
      case 'fahrenheit-celsius':
        result = (conversao.valor - 32) / 1.8
        break
      case 'fahrenheit-kelvin':
        result = (conversao.valor - 32) *  5 / 9 + 273
        break
      case 'kelvin-celsius':
        result = conversao.valor - 273
        break
      case 'kelvin-fahrenheit':
        result = (conversao.valor - 273) * 1.8 + 32
        break
      default:
        result = ''
        break
    }

    if(result != ''){
      let num = new Number(result)
      return num.toFixed(2)
    }

    return result
  }

  constructor() { }

}
