// AULA 01.03
// OBJETOS

// objetos servem para estruturar dados
// - propriedades (características)
// - métodos (ações)

const pet = {
    nome: "Emma", //propriedade-valor
    idade: 4,
    peso: 3,
    especie: "cachorro",
};  // quando tiver {} nessa estrutura, indica a declaração de um objeto
console.log(pet);

const pet2 = {
    nome: "Chloe", 
    idade: 9,
    peso: 4,
    especie: "cachorro",
    comidaFavorita: "frango",
}
console.log(pet2);

// Acesso de propriedades
console.log(pet.nome);
//ou
console.log(pet["nome"]);

// Alterar valores das propriedades
pet.nome = "Neneca";

console.log(pet);


// pet.peso = pet.peso + 3;
// pet.idade++

// com const pode alterar as propriedades mas não fazer: pet = {...};

// Adicionar nova propriedade:
pet.cor = "preta";
pet2.cor = "prata";
console.log(pet);

// Altere informações do seu pet e adicione novas proproedades
pet2.peso = 4.5;

pet.brinquedoFavorito = "bola";
pet2.localFavorito = "sofá";

console.log(pet);
console.log(pet2);


