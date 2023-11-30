let nome = "Usopp"
let xp = 8000

if (xp === 0){
    console.log( nome + "ainda não se tornou um pirata" )
}else if (xp < 1000 ) {
    console.log( nome + " é um pirata de verdade")
}else if (xp < 2000 ){
    console.log( nome + " é um dos comandantes da tripulação")
}else if (xp < 5000){
    console.log( nome + " está em nível Almirante!")
}else if (xp < 7000){
    console.log("Bravo! " + nome + " é um dos Shichibukai.")
}else if (xp < 8000){
    console.log( nome + " se tornou um Supernova")
}else if (xp < 9000){
    console.log("Incrível! " + nome + " é um bravo guerreiro do mar")
}else if (xp < 10000){
    console.log( nome + " é um dos piratas mais fortes do mundo! Está em nivel Yonkou!")
}else{
    console.log( nome + " é o pirata mais forte de todos os tempos!!!")
}