var agora = new Date()
var diaSem = agora.getDay()

switch(diaSem)
{
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('segunda feira')
        break
    case 2:
        console.log('terça feira')
        break
    case 3:
        console.log('quarta feira')
        break
    case 4:
        console.log('quinta feira')
        break
    case 5:
        console.log('sexta feira')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('Erro: nenhum dia da semana econtrado')
        break
}