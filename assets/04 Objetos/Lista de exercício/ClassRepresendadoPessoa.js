class pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    
}

    calcularImc() {
        const imc = this.peso / (this.altura * this.altura);
        return imc;
    }  

    classificarImc() {

        const imc = this.calcularImc();

        if (imc < 18.5) {
            return'Abaixo do peso'; 
         }else if (imc >= 18.5 && imc < 25) {
            return'Peso normal'; 
         }else if (imc >= 25 && imc < 30) {
            return'Acima do peso';
         }else if (imc >= 30 && imc < 40) {
            return'Obeso';
         }else{
            return'Obsesidade Grave';
         }
    }

}

// indistanciar

const jose = new pessoa('Jose', 63, 1.75);
console.log(jose.classificarImc());

const luide = new pessoa('Luide', 400, 1.70);
console.log(luide.classificarImc());