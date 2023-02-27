// Exercício I: Crie um array com 10 números.
// Percorra e calcule a soma de todos os números.

function exercicio1(){

    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let soma = 0;

    for (let numero of numeros){
        soma += numero
    }

    console.log(`A soma dos números ${numeros} é ${soma}.`)

}

//exercicio1()

function exercicio1a (){

    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let soma = 0;

    for(i = 0; i < numeros.length; i++){
        soma = soma + numeros[i]
    }

    console.log(`A soma dos números ${numeros} é ${soma}.`)

}

//exercicio1a()

// Exercício II: Crie um array com 5 notas.
// Percorra e calcule a média das notas.

function exercicio2(){

    let notas = [5.5, 9.0, 7.0, 8.5, 6.0];
    let soma = 0;

    for(let nota of notas){
        soma += nota
    }
    //console.log(soma)

    let media = soma / (notas.length)

    console.log(media)

}

//exercicio2()

function exercicio2a(){

    let notas = [5.5, 9.0, 7.0, 8.5, 6.0];
    let soma = 0;

    for(i = 0; i < notas.length; i++){
        soma = soma + notas[i]
    }
    //console.log(soma)

    let media = soma / (notas.length)

    console.log(media)

}

//exercicio2a()

// Exercício III: Crie um array com 7 números.
// Percorra e indique qual o maior número deles.

function exercicio3(){

    let numeros = [-4, -6, -47, -10, -80, 14, -3];
    let maiorNumero = numeros[0];

    for(let numero of numeros){
        if(maiorNumero < numero){
            maiorNumero = numero
        }             
    }

    console.log(maiorNumero);
}

//exercicio3();

// Exercício IV: Crie um array de frutas.
// Percorra e mostre o tamanho do nome de cada fruta.

function exercicio4(){

    let frutas = ["banana", "manga", "uva"];

    for(let fruta of frutas){
        console.log(`A palavra ${fruta} tem ${fruta.length} letras.`)
    }
}
//exercicio4();

// Exercício V: Crie um array de 5 números aleatórios.
// Utilize o esquema Math.floor(Math.random() * 100) para gerar
// números entre 0 e 99.
// Em seguida, crie um novo array. Percorra o anterior e adicione no novo
// apenas os números pares.
// Em seguida, mostre a soma de todos os números pares do array.

function exercicio5(){

    let numeros = [];  
    for (let i = 0; i < 5; i++) {
      numeros.push(Math.floor(Math.random() * 100));
    }
    console.log(numeros);

    let pares = [];
    for(let par of numeros){
        if(par % 2 === 0){
            pares.push(par)
        }
    }
    console.log(pares);

    let soma = 0;
    for(let par of pares){
        soma += par;
    }
    console.log(soma);

}
//exercicio5()

// Exercício VI: Crie uma função que recebe o nome de um arquivo e verifica
// se a extensão é .mp3 ou .wav (retorne true ou false)

function exercicio6(){

    function verifica (nomeArquivo){
        if(nomeArquivo.endsWith(".mp3") || nomeArquivo.endsWith(".wav")){
            return true
        } else {
            return false
        }
    }
     
    console.log(verifica("musica.mp3"))

}
//exercicio6()

// Exercício VII: Crie uma função que extrai os dígitos verificadores
// de um cpf. Ex: "056.985.990-23" -> "23".
// Retorne apenas os dois ultimos dígitos.

function exercicio7(){

    function verificadores (cpf){
        //return cpf[12] + cpf[13];
        return cpf.slice(-2);
    }
     
    console.log(verificadores("056.985.990-23"))

}
//exercicio7()

// Exercício VIII: Crie uma função que inverte uma string.
// Retorna ela invertida. BATATA -> ATATAB

function exercicio8(){

    function inverter (string){
        let stringInvertida = "";
        for(let i = string.length - 1; i >= 0; i--){
        stringInvertida += string[i]  
        }      
        return stringInvertida        
    }
     
    let string = "batata";
    console.log(`A string ${string} invertida é igual a ${inverter(string)}.`);

}
//exercicio8()

// Exercício IX: Crie uma função que mostra os elementos do array
// em ordem invertida. [1, 2, 3] -> [3, 2, 1]

function exercicio9(){

    let numeros = [1, 2, 3];

    function inverter (numeros){
        numeros.reverse()
        return numeros       
    }
         
    console.log(inverter(numeros));

}
//exercicio9()
