
function tabuada() {
    let numero = parseInt(prompt('Digite um numero inteiro de 1 a 10'))
    while(isNaN(numero)){
    numero = parseInt(prompt('Somente numeros. Digite um numero inteiro de 1 a 10'))
    
    }
    while(numero < 1 || numero > 10){
    numero = parseInt(prompt('O Numero tem que ser maior que 1 e menor que 10. Digite um numero inteiro de 1 a 10'))
    console.log(numero)
    }
        
        console.log(`Tabuada de ${numero}:`)
        for (let i = 1; i <= 10; i++) {
            let resultado = numero * i
    
            console.log(`${numero} x ${i} = ${resultado}`)
        }
    
    }
    
    tabuada();