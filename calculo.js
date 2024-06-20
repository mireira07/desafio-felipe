//saldo para subtrair e dar o resultado das vitórias
rankeada(144,75)

function rankeada(saldoVitorias,saldoDerrotas){
    //resultado das vitórias
    let res = saldoVitorias-saldoDerrotas;
    let nivel = res
   //calculador do resultado de vitórias - derrotas 
    if(nivel<=10){
        elo = "ferro"
    }else if(nivel >=11 && res <=20){
        elo = "bronze"
    }else if(nivel >=21 && res <=50){
        elo = "prata"
    }else if(nivel >=51 && res <=80){
        elo = "ouro"
    }else if(nivel >=81 && res <=90){
        elo = "diamante"
    }else if(nivel >=91 && res <=100){
        elo = "lendário"
    }else if(nivel >=101){
        elo = "imortal"
    }
   //resultado do saldo de vitória para definir o nível na rankeada
    console.log("O Herói tem de saldo de " + res + " vitória e está no nível de "+elo)
}