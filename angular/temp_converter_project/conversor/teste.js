class TemperaturaService {

    temperatura;
  
    tipoConversao;
  
    converter(conversao){
      this.tipoConversao = conversao.tipo
      let result;
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
          result = conversao.valor
          break
      }
  
      return result
    }
  
    constructor() { }
  
    
}

let temperaturaService = new TemperaturaService();

temperaturaService.tipoConversao = {tipo: 'celsius-fahrenheit', valor: 40}

let valorConvertido = temperaturaService.converter(temperaturaService.tipoConversao)

console.log(valorConvertido)