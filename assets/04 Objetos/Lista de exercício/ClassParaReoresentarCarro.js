class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    } 

    calcularGastoDePerrcurso(distânciaEmKm, precoCombustivel) {
        return distânciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
   
} 


const  uno = new Carro('Fiat', 'Branco', 1/12 );
console.log(uno.calcularGastoDePerrcurso(70, 5));

const  palio = new Carro('Fiat', 'Preto', 1/10 );
console.log(palio.calcularGastoDePerrcurso(70, 5));
