/*Faça um programa para calcular o valor de uma viagem

Você terá 3 variação sendo elas
    1 - Preço do combustível
    2 - Gasto médio de combustível do carro por KM
    3 - Distância em KM da viagem
Imprima no console o valor que será gasto de combustível para realizar esta viagem
*/
const precoMedioConbust = 5.79;
const kmPorLitro = 12;
const DistanciaEmKm = 1580;

const litrosConsumidos = DistanciaEmKm / kmPorLitro
const valorGasto = litrosConsumidos * precoMedioConbust;


console.log('O valor foi de '  + valorGasto.toFixed(2)); //toFixed Serve para arredondar os números decimais