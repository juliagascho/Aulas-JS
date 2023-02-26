// Exercício I: Crie uma função que recebe 2 números e um operador (+, -, *, /)
// e faça a operação indicada entre os 2 números. Não tem retorno.


function calculo (n1, n2, op){
    if(op == "+"){
        let soma = n1 + n2
        console.log(`O resultado da soma entre ${n1} e ${n2} é ${soma}`)
    }else if(op == "-"){
        let sub = n1 - n2
        console.log(`O resultado da subtração entre ${n1} e ${n2} é ${sub}`)
    }else if(op == "*"){
        let mult = n1 * n2
        console.log(`O resultado da multiplicação entre ${n1} e ${n2} é ${mult}`)
    }else if(op == "/"){
        let div = n1 / n2
        console.log(`O resultado da divisão entre ${n1} e ${n2} é ${div}`) 
    } else{
        console.log("Operador não identificado")
    }
}

calculo(5, 5, "+")
calculo(5, 5, "*")

/*
 function calculadora(num1, num2, operador){
    switch(operador){
        case "+": console.log(`${num1 + num2}`);
            break;
        case "-": console.log(`${num1 - num2}`);
            break;
        case "*": console.log(`${num1 * num2}`);
            break;
        case "/": console.log(`${num1 / num2}`);
            break;
        default: console.log("operador não definido");
    }
}

*/

console.log("------------------------"); 

// Exercício II: Crie uma função que converte fahrenheit em celsius.
// C = (F - 32) / 1.8. E retorna a temperatura comvertida.
// Em seguida crie uma outra função (checarTemperatura) que recebe uma temperatura 
// como parâmetro:
// Caso esteja abaixo de 10: "Muito frio!"
// Esteja entre 11 e 15: "Clima bom!"
// Esteja entre 16 e 30: "Agradável..."
// Seja maior que 30: "Hell"


function tempC (F){
    let C = (F - 32) / 1.8;
    return C;
}
    
let tempCidade = tempC(40)

function checarTemperatura (temp){
    if(temp < 11){
        console.log(`Muito frio!`)
    }else if(temp >= 11 && temp <= 15){
        console.log(`Clima bom`)
    }else if(temp > 15 && temp <= 31){
        console.log(`Agradável`)
    }else{
        console.log(`Hell`)
    }
} 


checarTemperatura(tempCidade);
checarTemperatura(tempC(40))


console.log("------------------------"); 