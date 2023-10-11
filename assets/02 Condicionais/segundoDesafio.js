/*Faça um programa para calcular o valor de uma viagem

Você terá 5 variação sendo elas
    1 - Preço do etanol;
    2 - Preço da gasolina;
    3 - O tipo de combustível que está no seu carro;
    4 - Gasto médio de combustível do carro por KM
    5 - Distância em KM da viagem
Imprima no console o valor que será gasto de combustível para realizar esta viagem
*/

const preçoDoEtanol = 5.79;
const preçoDaGasolina = 6.66;
const kmPorLitro = 10;
const distanciaEmKm = 100;
const tipoDeConbust = 'Gasolina';

const litrosConsumidos = distanciaEmKm / kmPorLitro;

if (tipoDeConbust === 'Etanol') {
    const valorGasto = litrosConsumidos * preçoDoEtanol;
    console.log('O valor foi de '  + valorGasto.toFixed(2)); //toFixed Serve para arredondar os números decimais
} else {
    const valorGasto = litrosConsumidos * preçoDaGasolina;
    console.log('O valor foi de '  + valorGasto.toFixed(2)); //toFixed Serve para arredondar os números decimais
}




