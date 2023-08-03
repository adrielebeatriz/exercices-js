//Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.

function salario() {
    const hP = prompt('Quanto você ganha por hora trabalhada?');
    const horasTrabalhadas = prompt('Quantas horas por mês você trabalha?');
  
    const valorHora = parseFloat(hP);
    const horas = parseFloat(horasTrabalhadas);
  
    const remuneracao = valorHora * horas;
    return remuneracao;
  }
  
  const resultado = salario();
  console.log('Seu salário mensal é de:', resultado);