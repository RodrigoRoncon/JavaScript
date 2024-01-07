
let valor = document.getElementById('valor')
let resultado = document.getElementById('res')
let lista = document.getElementById('flista')
let valores = []

function isNumber(n)
{
    if(Number(n) >= 1 && Number(n) <= 100)
    {
        return true
    } else
    {
        return false
    }
}

function inList(n, l)
{
    if(l.indexOf(Number(n)) != -1)
    {
        return true
    } else
    {
        return false
    }      
}

function add()
{

    if(isNumber(valor.value) && !inList(valor.value, valores))
    {
        valores.push(Number(valor.value))
        let item = document.createElement('option')
        item.text = `Valor ${valor.value} adicionado`
        lista.appendChild(item)
        resultado.innerHTML = ''
    } else
    {
        window.alert('valor inválido ou já encontrado na lista.')
    }
    valor.value = ''
    valor.focus()
}

function fim()
{
    if(valores.length == 0)
    {
        window.alert('Adicione valores antes de finalizar')
    } else
    {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos = 0; pos < tot; pos++)
        {
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / tot

        resultado.innerHTML = ''
        resultado.innerHTML += `<br>Ao todo, temos ${tot} números cadastrados.<br>`
        resultado.innerHTML += `<br>O maior valor informado foi ${maior}.<br>`
        resultado.innerHTML += `<br>O menor valor informado foi ${menor}.<br>`
        resultado.innerHTML += `<br>Somando todos os valores, temos ${soma}<br>`
        resultado.innerHTML += `<br>A média dos valores digitados é: ${media}`
    }
}