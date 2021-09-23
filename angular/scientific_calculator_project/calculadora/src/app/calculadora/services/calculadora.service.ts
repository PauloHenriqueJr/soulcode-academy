/**
 * Serviço da Calculadora
 * @author Paulo Henrique Jr
 * @github https://github.com/PauloHenriqueJr
 * @since v1.0.0
 */

 import { Injectable } from '@angular/core';

 @Injectable({
   providedIn: 'root'
 })
 export class CalculadoraService {

   //definindo as const utilizadas, para identificar as operações de calculo

   static readonly SOMA: string = '+';
   static readonly SUBTRACAO: string = '-';
   static readonly MULTIPLICACAO: string = '*';
   static readonly DIVISAO: string = '/';
   static readonly QUADRADO: string = 'x²';
   static readonly CUBO: string = 'x³';
   static readonly RAIZ: string = '√';
  

   constructor() { }

   /**
    * Método que calcula operações matemáticas básicas
    * @param num1 number
    * @param num2 number
    * @param operacao string Operação a ser calculada
    * @return number Resultado da operação
    */

    calcular(num1: number, num2: number, operacao: string): number {
     let resultado: number;

     switch (operacao) {
       case CalculadoraService.SOMA:
         resultado = num1 + num2;
         break;
       case CalculadoraService.SUBTRACAO:
         resultado = num1 - num2;
         break;
         case CalculadoraService.DIVISAO:
         resultado = num1 / num2;
         break;
       case CalculadoraService.MULTIPLICACAO:
         resultado = num1 * num2;
         break;

        break
       default:
         resultado = 0;
     }

     return resultado;
   }

   calcular2(num1: number, operacao: string): number {
		let resultado: number;
		switch (operacao) {
			case CalculadoraService.QUADRADO:
				resultado = Math.pow(num1, 2);
				break;
			case CalculadoraService.CUBO:
				resultado = Math.pow(num1, 3);
				break;
			case CalculadoraService.RAIZ:
				resultado = Math.sqrt(num1);
				break;
			default:
				resultado = 0
		}
		return resultado;
	}

 }
