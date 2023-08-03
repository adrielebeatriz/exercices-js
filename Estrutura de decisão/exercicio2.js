//Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.

function parOuImpar() {
    let number = prompt('Insira um número:')
    number = parseFloat(number)

    switch (number % 2) {
        case 0:
            console.log('O valor é par.')
            break;
        case 1:
            console.log('O valor é ímpar')
            break;

        default:
            console.log('O valor não é um número inteiro.')
            break;
    }
}

parOuImpar();



