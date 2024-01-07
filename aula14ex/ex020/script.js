function tabuada()
{
    var numero = window.document.getElementById('tab')
    var res = window.document.getElementById('tabuada')

    if(numero.value.length == 0)
    {
        window.alert('Não foi possivel fazer a tabuada, por favor digite um numero!')
    } else
    {
        var numeroN = Number(numero.value)
        var i = 1
        res.innerHTML = ''
        while(i <= 10)
        {
            var item = document.createElement('option')
            item.text = `  ${numeroN} x ${i} = ${numeroN*i}  `
            item.value = `tab${i}`
            res.appendChild(item)
            i++
        }
    } 
    
     
    
    
}