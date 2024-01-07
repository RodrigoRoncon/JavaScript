var hourNow = new Date()
var minuteNow = new Date()
var hora = hourNow.getHours()
var minuto = minuteNow.getMinutes()
console.log(`Agora sao exatamente ${hora} horas e ${minuto} minutos`)

if(hora < 5)
{
    console.log('Boa madrugada!')
} else if(hora < 12)
{
    console.log('Bom dia!')
} else if(hora < 18)
{
    console.log('Boa tarde!')
} else if(hora <= 24)
{
    console.log('Boa Noite!')
} 