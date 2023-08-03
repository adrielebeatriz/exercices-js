//Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário

function area() {
    const L = 5
    const A = 7
    const a = L * A;
    const areaEmDobro = a * 2;
    return areaEmDobro;
  }
  const resultado = area();
  console.log('o resultado do dobro da area do triangulo é: ', resultado)