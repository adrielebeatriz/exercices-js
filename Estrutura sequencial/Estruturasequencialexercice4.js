//Faça um Programa que peça as 4 notas bimestrais e mostre a média.



function calculaMedia() {
  let n1 = prompt("Insira a primeira nota:");
  let n2 = prompt("Insira a segunda nota:");
  let n3 = prompt("Insira a terceira nota:");
  let n4 = prompt("Insira a quarta nota:");

  n1 = parseFloat(n1);
  n2 = parseFloat(n2);
  n3 = parseFloat(n3);
  n4 = parseFloat(n4);

  if (!isNaN(n1) && !isNaN(n2) && !isNaN(n3) && !isNaN(n4)) {
    if(n1 <= 0 || n1 >= 10 && n2 <= 0 || n2 >= 10  && n3 <= 0 || n3 >= 10 && n4 <= 0 || n4 >= 10){
    alert('a nota precisa ser maior ou igual a 0 e menor ou igual 10')
    }
    const soma = n1 + n2 + n3 + n4;
    const media = soma / 4;
    alert("A média das notas é: " +  media.toFixed(2));
  } else {
    alert("Por favor, insira valores numéricos válidos para todas as notas.");
  }
}

  
