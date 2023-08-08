//Faça um Programa que leia três números e mostre o maior e o menor deles.
import isNumber from '../FuncoesUtilitarias/isnumber'
function maiorEMenor() {
    let numero1 = parseFloat(prompt('Digite o número 1:'));
    let numero2 = parseFloat(prompt('Digite o número 2:'));
    let numero3 = parseFloat(prompt('Digite o número 3:'));
    isNumber(numero1)? null:console.log('O valor precisa ser numerico')
    let maior, menor;
    const umMaiorque2 = numero1 >= numero2
    const umMaiorque3 = numero1 >= numero3
    if (umMaiorque2 && umMaiorque3) {
        maior = numero1;
    } else if (numero2 >= numero1 && numero2 >= numero3) {
        maior = numero2;
    } else {
        maior = numero3;
    }

    if (numero1 <= numero2 && numero1 <= numero3) {
        menor = numero1;
    } else if (numero2 <= numero1 && numero2 <= numero3) {
        menor = numero2;
    } else {
        menor = numero3;
    }

    return 'O maior número é: ' + maior + '\nO menor número é: ' + menor;
}

// Chamando a função e exibindo o resultado no console
var resultado = maiorEMenor();
console.log(resultado);
