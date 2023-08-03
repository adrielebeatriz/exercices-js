//Faça um Programa que verifique se uma letra digitada é vogal ou consoante.
function vogalOuConsoante() {
    let letra = prompt('Digite uma letra');
    let vogais = "aeiouAEIOU";

    switch (true) {
        case vogais.includes(letra):
            return "A letra é uma vogal.";
        case !vogais.includes(letra):
            return "A letra é uma consoante.";
        default:
            return "Por favor, digite apenas uma letra.";
    }
}

// Chamando a função e exibindo o resultado no console
var resultado = vogalOuConsoante();
console.log(resultado);
