// Aula 17.02.23
// tópicos: while, for

// Estruturas de repetição = loops = laços -> repetição de códigos
// Precisam de: Condição de parada, valor inicial, atualização

// while = enquanto -> enquanto uma condição for verdadeira, vai fazer tal coisa
/*
while(condicao){
    // codigo a se repetir
}
*/
/*

// Loop infinito 
let numero = 1;

while(true) { // loop infinito
    console.log(numero);
}
*/

/*
let numero = 1;

while(true) { // condição de parada
    console.log(numero);
    numero++;
}
*/

// Loop com parada e atualização
let numero = 1;
while (numero <= 10) {
  console.log(numero);
  numero++; // atualização
}
console.log("Fora do loop: " + numero);

//while ão pode ser controlado por tempo

let numero2 = 10;
while (numero2 >= 1) {
    console.log(numero2);
    numero2--; 
  }
  console.log("Fora do loop: " + numero2);

  //Soma 1+ 2 + 3 ....

  let contador = 1;
  let acumuladora = 0;

  while (contador <= 100) {
    acumuladora = acumuladora + contador;
    contador++;
  }
  console.log(acumuladora);


