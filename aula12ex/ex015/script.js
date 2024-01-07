function carregar()
{
    var msg = window.document.getElementById('msg')
    var msg2 = window.document.getElementById('msg2')
    var img = window.document.getElementById('imagem')
    var hora = new Date().getHours()
    //var hora = 20
    var minuto = new Date().getMinutes()
    msg.innerHTML = `Agora são <strong>${hora}</strong> horas e <strong>${minuto}</strong> minutos `

    if(hora >= 0 && hora < 12)
    {
        msg2.innerHTML = 'Tenha um Bom Dia!!'
        img.src = 'manhã.png'
        window.document.body.style.background = '#b6b63ec5'
    } else if(hora >= 12 && hora <= 18)
    {
        msg2.innerHTML = 'Tenha uma Boa Tarde!!'
        img.src = 'tarde.png'
        window.document.body.style.background = '#fa6109b2'
    } else if(hora > 18)
    {
        msg2.innerHTML = 'Tenha uma Boa Noite!!'
        img.src = 'noite.png'
        window.document.body.style.background = '#63361d'
    }
}
