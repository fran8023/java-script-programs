function exe1(){
    //recupera dados
    var x = Number(document.getElementById("numero1").value);
    var y = Number(document.getElementById("numero2").value);
    var resposta = (x - y)
    alert ("O resultado é "+ resposta)
}
function exe2(){
    //recupera dados
    var x = Number(document.getElementById("numero1").value);
    var y = Number(document.getElementById("numero2").value);
    var z = Number(document.getElementById("numero3").value);
    var resultado = (x*y*z)
    document.getElementById("saida").innerHTML= "A multiplicação resulta em " + resultado;
}
function exe5(){
    //recupera dados
    var preco = document.getElementById("preco").value;
    var novo = preco - (preco * 0.1) 
    document.getElementById("saida").innerHTML= " O valor com desconto é " + novo;
}
function exe14(){
    //recupera dados
    var nasce = document.getElementById("nasce").value;
    var atual = document.getElementById("atual").value;
    //processamento
    var idade = atual - nasce
    var meses = idade * 12
    var dias = idade * 365
    var semanas = idade * 52
    alert(" Idade em anos " + idade +
        "\n Idade em meses " + meses +
        "\n Idade em dias " + dias +
        "\n Idade em semanas " + semanas)
}
function exe21(){
    //recupera os dados
    var horas = document.getElementById("horas").value
    var minimo = document.getElementById("minimo").value
    var extras = document.getElementById("extras").value
    //calcula novo preço
    var salario = (horas * (minimo/8)) + (extras * (minimo/4))
    alert("Salario " + salario.toFixed(2))
}