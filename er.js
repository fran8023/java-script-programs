function exe1(){
    var A = Number(prompt("Informe o valor de A"))
    var B = Number(prompt("Informe o valor de B"))
    var C = Number(prompt("Informe o valor de C"))
    var D = Number(prompt("Informe o valor de D"))
    var aux
    for(var i=1;i<=3;i++){
        if (A > B){
            aux = A; A = B; B = aux
        }
        else if (B > C){
            aux = B; B = C; C = aux
    }
        else if (C > D){
            aux = C; C = D; D = aux
    }
}
    alert(`CRESCENTE: ${A} - ${B} - ${C} - ${D}`)
    alert(`DECRESCENTE: ${D} - ${C} - ${B} - ${A}`)
}
function exe2(){
    var preco = 5.0
    var qtde = 120
    var lucro
    var saida = "<table border=`1´> <tr> <th> Preço </th> <th> Quantidade </th> <th> Despesa </th> " + "<th> Lucro </th></tr>"
    while (preco >= 1.0){
        saida = saida + "<tr>"
        lucro = (preco * qtde) - 200
        saida = saida + `<td> R$ ${preco.toFixed(1)}</td> <td>${qtde}</td> <td> R$ 200,00 </td> <td> R$ ${lucro.toFixed(1)}</td>`
        qtde = qtde + 26
        preco = preco - 0.50
        saida = saida + "</tr>"
    }
     saida = saida + "</tr>"
     document.getElementById("saida").innerHTML = saida
}
function exe3(){
    var f1 = 0; var f2 = 0; var f3 = 0; var f4 = 0;
    var f5 = 0; 
    for(var i =1; i<= 8; i++){
    var idade = Number(prompt("Informe uma idade"))
     if (idade <= 15){
         f1++; // f1 = f1 + 1
     }
    else if (idade <= 30){
        f2++; // f2 = f2 + 1
    }
     else if (idade <= 45){
        f3++; // f3 = f3 + 1
     }
    else if (idade <= 60){
        f4++; // f4 = f4 + 1
     }
    else {
        f5++; // f5 = f5 + 1
    }
    }
    alert(f1 + "-" + f2 + "-" + f3 + "-"+ f4 + "-"+ f5)
    alert(f1/8*100 + "-" + f5/8*100)
}

function exe4(){
    var numero = Number(prompt("Informe um número"))
    var i = 0;
    var saida = ""
    while (i <= 10){
       saida = saida + `\n ${numero} x ${i} = ${numero*i}` 
       i++;
    }
    alert(saida);
}