//Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
//o produto do dobro do primeiro com metade do segundo .
//a soma do triplo do primeiro com o terceiro.
//o terceiro elevado ao cubo

function calculos() {
    numeroInt1 = prompt('Digite um número inteiro:');
    numeroInt2 = prompt('Digite outro número inteiro:');
    numeroReal = prompt('Digite um número real:');
    
    nInt1 = parseInt(numeroInt1);
    nInt2 = parseInt(numeroInt2);
    nReal = parseFloat(numeroReal);
    
    const produto = (2 * nInt1) * (nInt2 / 2);
    const soma = (3 * nInt1) + nReal;
    const cubo = nReal * nReal * nReal;
    
    return [produto, soma, cubo];
  }
  
  const respostas = calculos();
  console.log('O produto do dobro do primeiro com metade do segundo é:', respostas[0]);
  console.log('A soma do triplo do primeiro com o terceiro é:', respostas[1]);
  console.log('O terceiro elevado ao cubo é:', respostas[2]);
  