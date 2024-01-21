//funcao para calcular o saldo de rankeadas atraves do calculo (vitorias-derrotas)
function saldoRankeada(vitorias, derrotas){
    let saldo = vitorias -= derrotas
    return saldo
}
//chamada da funçao para calcular o saldo de rankeadas
let saldo = saldoRankeada(179, 53)

//funçao para definir o elo do jogador
let elo = "";
    function eloDoJogador(saldo) {
        
        if (saldo < 10) {
            elo = "Ferro!";
        } else if (saldo >= 10 && saldo <= 20){
            elo = "Bronze!";
        } else if (saldo >= 21 && saldo <= 50){
            elo = "Prata!";
        } else if (saldo >= 51 && saldo <= 80){
            elo = "Ouro!";
        } else if (saldo >= 81 && saldo <= 90){
            elo = "Diamante!";
        } else if (saldo >= 91 && saldo <= 100){
            elo = "Lendário!";
        } else {
            elo = "Imortal!";
        }
    }

//chamada da funçao para definir o elo do jogador
    eloDoJogador(saldo);

//interpolaçao de string para exibir o resultado com as variaveis necessarias
console.log(`O herói tem um saldo de ${saldo} vitórias. Portanto, está no elo ${elo}`);