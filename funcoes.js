function exe1(){
    nota1 = Number(document.getElementById("nota1").value);
    nota2 = Number(document.getElementById("nota2").value);
    nota3 = Number(document.getElementById("nota3").value);
    nota4 = Number(document.getElementById("nota4").value);

    var media = (nota1+nota2+nota3+nota4)/4

    if (media>=7){
        alert("APROVADO com a média " + media )
        console.log("APROVADO com a média " + media )
        
    }
    else {
        alert("REPROVADO com a Média " + media)
        console.log("REPROVADO com a média " + media )
        
    }
}
function exe2(){
    n1 = Number(document.getElementById("n1").value);
    n2 = Number(document.getElementById("n2").value);
    var media = (n1 + n2)/2
    if (media >= 7){
        alert("APROVADO com a média " + media )
        console.log("APROVADO com a média " + media )
        
    }
    else if ((media >= 3) && (media < 7)){
        alert("EXAME com a Média " + media)
        console.log("EXAME com a média " + media )

    }
    else {
        alert("REPROVADO com a Média " + media)
        console.log("REPROVADO com a média " + media )
    }
}   
function exe3(){
    numero1 = Number(document.getElementById("numero1").value);
    numero2 = Number(document.getElementById("numero2").value);

    if (numero1 > numero2){
        alert("O numero 2 é o menor numero: " + numero2)
    }
    else if (numero2 > numero1){
        alert("O numero 1 é o menor numero: " + numero1)
    }
    else{
        alert("Os numeros sao iguais")
    }
}
function exe4(){
    num1 = Number(document.getElementById("num1").value);
    num2 = Number(document.getElementById("num2").value);
    num3 = Number(document.getElementById("num3").value);

    if ((num1 > num2) && (num2 > num3)){
        alert("Maior numero: " + num1)
    }
    else if ((num2 > num1) && (num2 > num3 )){
        alert("Maior numero: " + num2)
    }
    else if ((num1 == num2) && (num2 == num3 )){
        alert(" Os numeros são iguais numero: " + num1)
    }
    else if ((num3 > num1) && (num3 > num2 )){
        alert("Maior numero: " + num3)
    }
    else if ((num1 == num2) && (num2 > num3 )){
        alert("Maior numero: " + num2)
    }
    else if ((num2 == num3) && (num2 > num1 )){
        alert("Maior numero: " + num2)
    }
    else if ((num2 == num3) && (num1 > num2 )){
        alert("Maior numero: " + num1)
    }
     else if ((num1 == num3) && (num2 > num3 )){
        alert("Maior numero: " + num2)
    }
     else if ((num1 == num3) && (num1 > num2 )){
        alert("Maior numero: " + num1)
    }
}
 function exe5(){
    nume1 = Number(document.getElementById("nume1").value);
    nume2 = Number(document.getElementById("nume2").value);
    opcao = Number(document.getElementById("opcao").value);
    var resultado 
    switch(opcao){
        case 1: resultado = (nume1 + nume2)/2
            break
        case 2: if (nume1 >= nume2){
            resultado = nume1 - nume2
        }
            else{
                resultado = nume2 - nume1
        }
            break
        case 3: resultado = nume1 * nume2
            break
        case 4: if (nume2 !=0){
            resultado = nume1 / nume2
        }
        else
            resultado = "A divisão por zero (0)"
           break
    default: resultado = "opção invalida"
    }
alert("resultado " + resultado)
    }
function exe7(){
    salario = Number(document.getElementById("salario").value)
    if ( salario < 500){
        novo = salario + salario*30/100
        alert("novo valor " + novo)           
    }
    else {
        alert ("Não tem direito ao aumento")
    }

} 
function exe22(){
        peso = Number(document.getElementById("peso").value)
        idade = Number(document.getElementById("idade").value)
        risco = 0
    if ( idade < 50) {
        if ( peso < 90){
            alert ("risco 1")   
        }
        else if (( idade <= 60) && (peso < 90)) {
            alert ("risco 2")       
        }
        else {
            alert ("risco 3")
        }   
    }
     else if (( idade > 20) && ( idade > 50)) {
         if(peso > 90){
             alert ("risco 4")
         }
        else if (( idade > 60)  && ( idade < 90)) {
            alert ("risco 5")
        }
        else  {
         if(peso > 90){
            alert ("risco 6")
         }
        }    
        }
        else if ( idade < 20) {
            if (peso > 90) {
             alert ("risco 7")
            }
             else if (( idade > 60) && ( idade < 90))  {
                  alert ("risco 8")
            }
        else {
            alert ("risco 9")
       }
        }
}