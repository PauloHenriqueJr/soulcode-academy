
   class Carro {
    marca: string;
    ano: number;
    modelo: string;
    cor:string;
  
   
  constructor (marca:string, ano:number, modelo:string,cor:string){
    this.marca = marca
    this.ano = ano
    this.modelo = modelo
    this.cor = cor
  }

  escreverPropriedades(){
    console.log(this.marca)
    console.log(this.ano)
    console.log(this.modelo)
    console.log(this.cor)
  }

}

  let carro = new Carro("uno",2000,"completo","preto");
  carro.escreverPropriedades();
  console.log(carro)


