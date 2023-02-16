// Estruturas de seleção

let lang = "pt"; // pt, es, en

if(lang === "pt"){
    console.log("Olá, mundo!");
} else if(lang === "es") {
    console.log("Hola, mundo!");
} else if(lang === "en"){
    console.log("Hello, wolrd!");
} else {
    console.log(`Não há suporte para este idioma: ${lang}!`);
}

// Essa mesma estrutura com switch-case (escolha-caso), sempre que for utilizar, precisa utilizar o break:

switch(lang) {
    case "pt":
        console.log("Olá, mundo!");
        break; // o break para as verificações abaixo
    case "es":
        console.log("Hola, mundo!");
        break;
    case "en":
        console.log("Hello, wolrd!");
        break;
    default: // caso não encontre nenhuma
    console.log(`Não há suporte para este idioma: ${lang}!`);
}