function exe1() {
    var f1 =0;  var f2=0; var f3=0; var f4=0; 
    var f5=0; 
    for (var i =1; i<=8; i++){
        var idade =  Number (prompt("Informe uma idade"))
        if (idade <= 15){
            f1++; // f1= f1+f1
        }
        else if (idade <= 30){
            f2++;
        }

            else if (idade <= 45){
                f3++;

            }
                else if (idade <=60){
                      f4++;
                    
                }
    
                else {
                    f5++;
                 }
    
       
    
    }
    alert(`${f1} - ${f1} -  ${f1} -  ${f1}- ${f1}`)
    alert(`${f1/8*100}  - ${f5/8*100}`)


}


function exe2(){
    var preco = 5.0
    var qtde = 120
    var lucro 
    var saida = "table border= ´1´ <tr> <th> Preco </th> <th> Qtde </th <th> Despesa </th> " +
                "<th> Lucro </th></tr>" 
    while (preco >= 1.0){
        saida += saida + "<tr>"
        lucro = (preco * qtde)- 200
        saida = saida +  `<td> R$ ${preco.toFixed(1)}</td> <td> ${qtde}</td <td> R$ 200.00 </td>
                        <td> R$ ${lucro.tofixed(1)} </td>`
        
        qtde = qtde + 26 
        preco = preco - 0.5
        saida  = saida + "</tr>"

        }
        saida = saida + "</table>"
        document.getElementById ("saida").innerHTML = saida


    }


    function exe3(){
        var numero = Number(prompt("Informe um número"))
        var i = 0;
        var saida = ""
        while (i<=0){
                saida = saida + `\n ${numero} x ${i} = ${numero*1}`
                i++; // i = i + 1
        }   
    }



    function exe4(){
        var A = Number (prompt("Informe A"))
        var B= Number (prompt("Informe A"))
        var C = Number (prompt("Informe A"))
        var D = Number (prompt("Informe A"))
        var aux
        for (var i = 1; i<=3; i++){
            if (A > B) {
                aux = A; A = B; B = aux
            }

            else if (B > C){
                aux = B; B= C; C = aux

            }

            else if (C > D){
                aux = C; C= D; D = aux
            }




        }

       
     alert (`Crescente: ${A} -  ${B}- ${C}- ${D} `)
      alert (`Drescente: ${D} -  ${C}- ${B}- ${A} `)


    }



    function exe5(){
       var i, j
    for (i =1; i<=10; i++){
            console.log (`Tabuada do ${i} `)
            for (j=1; j <=10; j++){
                console.log (`${i} x ${j} = ${i*j}`)
            }

        

    }
}

function exe6(){
        var totalVista = 0
         var totalPrazo = 0
         var i = 1
    while (i <= 5) {
             var valor = Number(promt("Valor da compra"))
        var tipo= prompt ("Tipo (V/p da compra"). toUpperCase()
        if (tipo == "V"){
            totalVista = totalVista + valor

        }

        else if (tipo== "p"){
            totalPrazo = totalPrazo + valor
        }

        i++

    }
    alert (`Total a vista : ${totalVista}\n Total a prazo ${totalPrazo} \n Total Geral ${totalVista} \n Total a prazo ${totalPrazo}
    \n Total Geral ${(totalVista)+ (totalPrazo)} \n Parcela 1 do valor \n a prazo ${(totalPrazo/3).toFixed(2)} `)
    

}



function exe7(){
    var item1 = 0 // qtde  de pessoas com idades > 20
    var item2 = 0 // soma das alturas com idade entre 10 e 20
    var aux = 0 // qtde de pessoas com idade entre 10 e 20
    var item3 = 0  // qtde de pessoas com peso < 40
    var contador = // conta pessoas
    do {
        var idade = Number(prompt("Informe Idade"))
        var altura = Number(prompt("Informe altura"))
        var peso = Number(prompt("Informe peso"))
        contador++
        if (idade > 50){
            item1++
        }

        if ((idade > 10) && (idade < 20)){
            item2 = item2 + altura
            aux++


        }

        if (peso < 40) {
            item3++

        }
         var opcao= prompt("Deseja continuar? (S/N)").toUpperCase();


    }

    while (opcao != "N")
    alert(`Item 1: ${item} Item2: ${item2/aux} item 3: ${item3/contador*100}`)
   
       

}