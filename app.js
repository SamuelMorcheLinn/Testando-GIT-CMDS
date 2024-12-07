alert('Boas vindas ao jogo do número secreto');
let numSecreto = parseInt(Math.random() * 100 + 1);
console.log(numSecreto);
let chute;
let tentativas = 0;

while (chute != numSecreto){
chute = prompt('Escolha um número de 1 a 100');
tentativas++;// ou tentativas = tentativas + 1
if(chute > numSecreto){
    alert('O número secreto é menor que ' + chute);
}else if (chute < numSecreto){
    alert('O número secreto é maior que ' + chute);
  }
}
if (chute == numSecreto){
    alert('Isso aí! Você acertou o número secreto!')
}

let palavraTentativa = tentativas == 1 ? 'tentativa' : 'tentativas';
console.log(`Você gastou ${tentativas} ${palavraTentativa}`)
   
//if (tentativas == 1){
   // console.log(`Você gastou ${tentativas} ${palavraTentativa}`)
//}
//else{
    //console.log(`Você gastou ${tentativas} ${palavraTentativa}`)
   // }
