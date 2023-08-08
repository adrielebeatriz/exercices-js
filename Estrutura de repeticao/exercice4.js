//Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% 
//e que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule 
//e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B,
// mantidas as taxas de crescimento.

function calcularCrescimentoPopulacional(populacaoA, taxaCrescimentoA, populacaoB, taxaCrescimentoB) {
    let anos;
    for (anos = 0; populacaoA < populacaoB; anos++) {
      populacaoA *= 1 + taxaCrescimentoA / 100;
      populacaoB *= 1 + taxaCrescimentoB / 100;
    }
    return anos;
  }
  
  const populacaoA = 80000;
  const taxaCrescimentoA = 3;
  
  const populacaoB = 200000;
  const taxaCrescimentoB = 1.5;
  
  const anosNecessarios = calcularCrescimentoPopulacional(populacaoA, taxaCrescimentoA, populacaoB, taxaCrescimentoB);
  console.log(`Serão necessários ${anosNecessarios} anos para a população do país A ultrapassar ou igualar a população do país B.`);
  