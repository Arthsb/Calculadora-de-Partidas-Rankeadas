function calculadoraDeNivel(vitorias,derrotas){
    let calculo = vitorias - derrotas
    
    let resultNivel = ""
        if( calculo < 10){
        resultNivel = "Ferro"
    }
    else if(calculo < 50){
        resultNivel = "prata"
    }
    else if(calculo < 80){
        resultNivel = "ouro"
    }
    else if(calculo < 90){
        resultNivel = "diamante"
    }
    else if(calculo <100){
        resultNivel = "lendário"
    }
    else{
        resultNivel = "imortal"
    }
   
    console.log("O herói tem o saldo de " + calculo + " e está no nível " + resultNivel) 
}

calculadoraDeNivel(101,1)