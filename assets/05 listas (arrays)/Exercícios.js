

//  1) Crie um programa que dê um número imprima à sua tabuada.
console.log('----------Exercício 1----------')
const numero= 7;

for (let i = 1; i <= 10; i++) {
    

    console.log(i* numero);
    
    
}

// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprimir cada número encontrado.
console.log('----------Exercício 2----------')
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    console.log(numero);
}

// 2.1)  imprimir os numeros par cada número encontrado.

console.log('----------Exercício 2.1----------')
const numeros1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros1.length; i++) {
    const numero = numeros[i];
    if (numero % 2 === 0) {
        console.log(numero);

    }
}