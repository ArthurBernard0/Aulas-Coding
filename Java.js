var valor = 96.50;
function mostraValor()
{
    return this.valor;
}
 var f= atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

function calc()
{
    var valorQuantidade = this.valor * parseFloat(document.getElementById("quantidade").value);
    document.getElementById("valortotal").innerHTML = (valorQuantidade);
    return valorQuantidade;
}