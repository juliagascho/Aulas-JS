// Aula 02/03
// Objetos aninhados e arrays de objetos

// Objetos aninhados: um objeto dentro de outro

let pessoa = {
    nome: "José Almir",
    cpf: "999-999-999-99",
    email: "jose.almir@soulcode.com",
    endereco: { // agrupar propriedade - colocando um objeto dentro de outro objeto
        cidade: "Ubajara",
        estado: "CE",
        cep: "62350-000",
    },
    objetivosProfissionais: ["Home Office", "CLT", "Desenvolvedor Senior"],
    formacao: [ // array de objetos:
        {nome: "Ensino médio", periodo: "2006-2008"}, // posição zero dentro da array formação
        {nome: "Técnico em informática", periodo: "2008-2010" },   // posição 1 dentro da array formação     
    ]
}

console.log(pessoa.endereco.estado);
console.log(pessoa.objetivosProfissionais);
console.log(pessoa.objetivosProfissionais[0]);
console.log(pessoa.formacao);
console.log(pessoa.formacao[0].nome);