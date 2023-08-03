//Faça um Programa que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.



function horarioAula(){
    let horario = prompt('Em qual turno você estuda? Digite M-matutino ou V-Vespertino ou N- Noturno')
    horario = horario.toUpperCase(); 
    switch(true){
        case  horario.includes('M'):
            console.log('Bom dia')
            break;
        case  horario.includes('V'):
            console.log('Boa tarde')
            break;     
        case  horario.includes('N'):
            console.log('Boa noite')
            break; 
        default:
            console.log('Valor Inválido!')
            break;
    }
}

horarioAula();