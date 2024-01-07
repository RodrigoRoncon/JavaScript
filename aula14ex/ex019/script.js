
function contar()
{
    var contInicial = window.document.getElementById('inicio')
    var contFinal = Number(window.document.getElementById('fim').value)
    var contPasso = Number(window.document.getElementById('passo').value)
    var resultado = window.document.getElementById('res')
    var contInicialN = Number(contInicial.value)
    if(contPasso == 0)
    {
        window.alert('Impossivel contar com passo 0, será contado considerando passo 1')
        contPasso = 1
    }
    if(contInicial.value.length == 0)
    {
        window.alert ('Impossivel contar, por favor coloque um numero inicial')
    }

    else if(contInicialN < contFinal)
    {
        resultado.innerHTML = 'Contando:'
        while (contInicialN <= contFinal)
        {
            resultado.innerHTML += `  - ${contInicialN} `
            contInicialN += contPasso
        }
    }else
    {
        resultado.innerHTML = 'Contando:'
        while(contInicialN >= contFinal)
        {
            resultado.innerHTML += `  - ${contInicialN} `
            contInicialN -= contPasso
        }
    }
}