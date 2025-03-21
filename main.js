function Carro(valor,cor,ano,modelo,popular){
    this.valor = valor
    this.cor = cor
    this.ano = ano
    this.modelo = modelo
    this.popular = popular
}

let Porsche = new Carro (150000,"cinza",2023,"911 Turbo S", false)
console.log(Porsche)