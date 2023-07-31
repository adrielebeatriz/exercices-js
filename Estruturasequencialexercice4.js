//Faça um Programa que peça as 4 notas bimestrais e mostre a média.


function media() {
    var n1 = prompt("Insira a primeira nota:");
    var n2 = prompt("Insira a segunda nota:");
    var n3 = prompt("Insira a terceira nota:");
    var n4 = prompt("Insira a quarta nota:");
  
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    n3 = parseFloat(n3);
    n4 = parseFloat(n4);
  
    if (!isNaN(n1) && !isNaN(n2) && !isNaN(n3) && !isNaN(n4)) {
      var soma = n1 + n2 + n3 + n4;
      var media = soma / 4;
      alert("A média das notas é: " + media);
    } else {
      alert("Por favor, insira valores numéricos válidos para todas as notas.");
    }
  }
 
  media();
  
