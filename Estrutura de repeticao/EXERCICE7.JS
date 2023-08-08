//Faça um programa que leia 5 números e informe o maior número.


function maiorNumero() {
    let maior = -Infinity;  
    for (let i = 1; i <= 5; i++) {
        let numero = parseFloat(prompt(`Digite o número ${i}:`));  
        if (numero > maior) {
            maior = numero;  
        }
    }

    console.log(`O maior número entre os digitados é: ${maior}`);
}

maiorNumero();