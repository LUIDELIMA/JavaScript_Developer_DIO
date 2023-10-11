//  Conceito básico sobre funções
//Declarando uma função

function teste() {
    console.log('teste');

}

//Tricho abaixo é para invocação de função ou executá la

teste();
teste();
//----------------------------------------------//

//  1º Exemplo
//Declarando uma função
function sayMyName(nome) {
    console.log('You name is: ' + nome);

}
//Tricho abaixo é para invocação de função ou executá la
sayMyName('Luide');
sayMyName('Edson');

//----------------------------------------------//


//  2º Exemplo

function quadrado(valor) {
    return valor * valor;
}
//const quadradoDeDez = quadrado (10);
//console.log('O valor do quadrado é : ' + quadradoDeDez);

//OU
console.log('O valor do quadrado é : ', quadrado (10) + quadrado (10));

//----------------------------------------------//


//  3º Exemplos

function incrementarJuros(valor, percetualJuros) {
    const valorDeAcrecimo = (percetualJuros / 100) * valor;
    return valor + valorDeAcrecimo

}
console.log('O valor total do pagamento é: ', + incrementarJuros(100, 10));
console.log('O valor total do pagamento é: ', + incrementarJuros(100, 15));
console.log('O valor total do pagamento é: ', + incrementarJuros(100, 25));

//----------------------------------------------//


//Como organizar as funções

//***Podemos criar funções auxiliares necessárias aqui do lado de fora acima da função main
function calcularJuro () {
//***Podemos criar funções auxiliares necessárias aqui do lado de fora acima da função main
}

function main () {
    console.log('Programa Principal');

    //** Aí podemos usar na função principal essas funções auxiliares Conforme for preciso.
    calcularJuro();
     //** Aí podemos usar na função principal essas funções auxiliares Conforme for preciso.
}
main();
//--------------------------------------------------------------------------------------//
// Calcular IMC usando funções usando funções

            //Código anterior

            const peso = 100;
            const altura = 1.70;
            const imc = peso / (altura * altura);
            console.log('O IMC é ' + imc.toFixed(2));
            
            if (imc < 18.5) {
                console.log('Abaixo do peso'); 
            }else if (imc >= 18.5 <= 25) {
                console.log('Peso normal'); 
            }else if (imc >= 25 <= 30) {
                console.log('Acima do peso');
            }else if (imc >= 30 <= 40) {
                console.log('Obeso');
            }else{
                console.log('Obsesidade Grave');
            }
//--------------------------------------------------------------------------------------//
    // Código usando função
function calcularImc1(peso1, altura1) { //Funções auxiliares
    return peso1 / (altura1 * altura1);

}

function classificarImc1(imc1) { //Funções auxiliares
    if (imc1 < 18.5) {
       return'Abaixo do peso'; 
    }else if (imc1 >= 18.5 <= 25) {
       return'Peso normal'; 
    }else if (imc1 >= 25 <= 30) {
       return'Acima do peso';
    }else if (imc1 >= 30 <= 40) {
       return'Obeso';
    }else{
       return'Obsesidade Grave';
    }

}

    //codigo principal/função Main

function main(){  
    const peso1 = 70;
    const altura1 = 1.70;

    const imc1 = calcularImc1(peso1, altura1);
        console.log('O IMC é ', calcularImc1(peso1, altura1).toFixed(2), ': ' + classificarImc1(imc1));
}              
// Para minha função Main funcionar eu tenho que invocar ela    
 main();

 //--------------------------------------------------------------------------------------//

 // Código usando função Invocada imediatamente usada mas no desenvolvimento da web
function calcularImc1(peso1, altura1) { //Funções auxiliares
    return peso1 / (altura1 * altura1);

}

function classificarImc1(imc1) { //Funções auxiliares
    if (imc1 < 18.5) {
       return'Abaixo do peso'; 
    }else if (imc1 >= 18.5 && imc1 <= 25) {
       return'Peso normal'; 
    }else if (imc1 >= 25 && imc1 <= 30) {
       return'Acima do peso';
    }else if (imc1 >= 30 && imc1 <= 40) {
       return'Obeso';
    }else{
       return'Obsesidade Grave';
    }

}

    //codigo principal/função Main

(function main() {  
    const peso1 = 80;
    const altura1 = 1.70;

    const imc1 = calcularImc1(peso1, altura1);
        console.log('O IMC é ', calcularImc1(peso1, altura1).toFixed(2), ': ' + classificarImc1(imc1));
})();  
// Código usando função Invocada imediatamente usada mas no desenvolvimento da web 
//--------------------------------------------------------------------------------------//
