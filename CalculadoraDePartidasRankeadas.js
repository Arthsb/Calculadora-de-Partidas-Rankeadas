function CalculoVitorias (won,lose){
    let calculo = won - lose
    return calculo
}


function classificacaonivel(valorDeVitorias = saldoVitorias ){
  let resultNivel = ""
    if(valorDeVitorias < 10){
        resultNivel = "Ferro"
    }
    else if(valorDeVitorias < 50){
        resultNivel = "Prata"
    }
    else if(valorDeVitorias < 80){
        resultNivel = "Ouro"
    }
    else if(valorDeVitorias < 90){
        resultNivel = "Diamante"
    }
    else if(valorDeVitorias < 100){
        resultNivel = "Lendário"
    }
    else{
        resultNivel = "Imortal"
    }
return resultNivel 
}
let saldoVitorias = CalculoVitorias(60,10)




console.log("o herói tem o saldo de vitórias de " + saldoVitorias + " e está no nível de " + classificacaonivel()) 