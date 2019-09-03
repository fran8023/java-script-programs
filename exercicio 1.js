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