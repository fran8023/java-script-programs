function exe1(){
    //recupera dados
    var nota1 = Number(document.getElementById("nota1").value);
    var nota2 = Number(document.getElementById("nota2").value);
    var nota3 = Number(document.getElementById("nota3").value);
    var nota4 = Number(document.getElementById("nota4").value);
    //processamento
    //calcular media
    var media = (nota1+nota2+nota3+nota4)/4
    //verifica aprovados
    if (media >= 7){
        document.getElementById("saida").innerHTML= "Aprovado com média " + media
    }
    else{
        document.getElementById("saida").innerHTML= "Reprovado com média " + media
    }
}
function exe2(){
    //recupera dados
    var nota1 = Number(document.getElementById("n1").value);
    var nota2 = Number(document.getElementById("n2").value);
    //processamento
    //calcular media
    var media = ((parseInt(nota1) + parseInt(nota2))/2)
    //verificação
    if (media >= 7){
        document.getElementById("saida2").innerHTML= "Aprovado com média " + media
    }
    else if ((media >= 3) && (media < 7)){
        document.getElementById("saida2").innerHTML= "Exame com média " + media
    }
    else{
        document.getElementById("saida2").innerHTML= "Reprovado com média " + media
    }
}
function exe3(){
    //recupera dados
    var numero1 = Number(document.getElementById("numero1").value);
    var numero2 = Number(document.getElementById("numero2").value);
    //verificação
    if (numero1 < numero2){
        document.getElementById("saida3").innerHTML= "O menor numero é " + numero1
    }
    else if (numero2 < numero1){
        document.getElementById("saida3").innerHTML= "O menor numero é " + numero2
    }
    else{
        document.getElementById("saida3").innerHTML= "Não existe menor numero " 
    }
}
function exe4(){
    //recupera dados
    var numero1 = Number(document.getElementById("number1").value);
    var numero2 = Number(document.getElementById("number2").value);
    var numero3 = Number(document.getElementById("number3").value);
    //verificação
    if ((numero1 == numero2) && (numero2 == numero3)){
        document.getElementById("saida4").innerHTML= "Não existe maior numero " 
    }
    else if ((numero1 > numero2) && (numero1 > numero3)){
        document.getElementById("saida4").innerHTML= "O maior numero é " + numero1
    }
    else if ((numero2 > numero3) && (numero2 > numero1)){
        document.getElementById("saida4").innerHTML= "O maior numero é " + numero2
    }
    else{
        document.getElementById("saida4").innerHTML= "O maior numero é "  + numero3
    }
}
function exe5(){
    //recupera dados
    var no1 = Number(document.getElementById("no1").value);
    var no2 = Number(document.getElementById("no2").value);
    var opcao = Number(document.getElementById("opcao").value);
    switch(opcao){
        case 1: resultado = (no1 + no2) / 2
            break //não entra no case de baixo
        case 2: if (no1 >= no2){
                    resultado = no1 - no2
                }
                else{
                    resultado = no2 - no1
                }

                break //não entra no case de baixo
        case 3:
            break //não entra no case de baixo
        case 4: if(no2 != 0){
                    resultado = no1 / no2
                }
                else{
                    resultado = "Divisão por zero"
                }
            break //não entra no case de baixo
        default: resultado = "Opção inválida"
    }
    document.getElementById("saida5").innerHTML= "O resultado é "  + resultado


    function exe7(){
        var salario= Number(document.getElementById(" salario").value
        if (salario < 500 {
            var novo= salario + salario*30/100
            alert("Novo valor" + novo)

        }
        else {
            alert ("Não tem direito a aumento")
        }
    }
    
