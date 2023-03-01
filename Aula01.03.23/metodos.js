// métodos = são ações de um objeto

let pet = {
    //Atributos (características):
    nome: "Emma", 
    idade: 4,
    peso: 3,
    especie: "cachorro",
    //Métodos (Ações):
    brincar(brinquedo) {
        console.log(`Quero brincar, joga a ${brinquedo}!!`);
    },
    comer(){
        console.log(`Eu estou comendo.`);
    },
}

pet.brincar("boleta"); // invocação da função/método do objeto
pet.comer();

let pessoa = {
    nome: "João",
    idade: 25,
    nacionalidade: "brasileiro",
    dizerOi(){
        console.log(`Oi, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.nacionalidade}!`);  // this = representa o objeto dono do método - só funciona dentro do método
    },
    envelhecer(){
        this.idade++;
    },
    cuidarPet(petParametro){
        console.log(`Estou cuidando da ${petParametro.nome}.`);
        petParametro.comer();
        petParametro.peso += 0.2;
    }
};

pessoa.dizerOi();
pessoa.nome += " Silva";
pessoa.envelhecer();
pessoa.dizerOi();

pessoa.cuidarPet(pet); // aqui no lugar do parametro 'petParametro' eu uso outro objeto: pet