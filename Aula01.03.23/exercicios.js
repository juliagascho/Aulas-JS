// Exercício I: Crie um objeto que representa uma conta bancária.
// Propriedades: codigo, saldo, cpf do titular e nome do titular
// Métodos:
// - saque(valor): retirar o valor ao saldo
// - deposito(valor): adicionar o valor do saldo

let conta = {
    codigo: 3348, 
    saldo: 400.00,
    cpfTitular: "770.293.874-20",
    nomeTitular: "Maria dos Santos",
    saque(valor) {
        this.saldo = this.saldo - valor
        console.log(`Você sacou ${valor} reais e o saldo da sua conta é de ${this.saldo}`);
    },
    deposito(valor){
        this.saldo = this.saldo + valor
        console.log(`${valor} reais foram depositados em sua conta bancária e seu saldo é de ${this.saldo}`);
    },
}

// correção professor:

// let conta = {
//     // Atributos
//     codigo: "0-1000",
//     saldo: 25,
//     cpfTitular: "999-999-999-99",
//     nomeTitular: "Bill",
//     // Métodos
//     saque(valor){
//         this.saldo -= valor;
//     },
//     deposito(valor){
//         this.saldo += valor;
//     },
// }

console.log(conta);
console.log(conta.saldo);
conta.saque(10);
console.log(conta.saldo);
conta.deposito(20);
console.log(conta.saldo);

console.log("------------------------"); 

// Exercício II: Crie um objeto que representa um produto.
// Propriedades: nome, descricao, quantidade, precoOriginal, desconto (em reais).
// Métodos:
// - calcularPrecoDesconto(): retorna o valor aplicado ao desconto
// - apresentacao(): mostra as informações das propriedades
// - comprar(total): reduz a quantidade em relação ao total

let produto = {
    nome: "geladeira",
    descrição: "Geladeira/Refrigerador Frost Free cor Inox 310L Electrolux (TF39S) 220V",
    quantidade: 10,
    precoOriginal: 2800,
    desconto: 100,
    calcularPrecoDesconto(){
        let resultado = this.precoOriginal - this.desconto
        return resultado            
    },
    apresentacao(){
        console.log(produto)
    },
    comprar(total){
        this.quantidade -= total;
        console.log(`${this.quantidade}`)
    },
}

produto.apresentacao();
produto.calcularPrecoDesconto();
console.log(produto.calcularPrecoDesconto());
produto.comprar(2);



//  resolução professor:

let produto2 = {
    // Atributos/propriedades
    nome: "Relojim",
    descricao: "Indica a hora os minutos e os segundos",
    quantidade: 100,
    precoOriginal: 500,
    desconto: 30,
    // Métodos
    calcularPrecoDesconto() {
      let precoCompra = this.precoOriginal - this.desconto;
      return precoCompra;
    },
    apresentacao() {
      console.log(this);
    },
    comprar(total) {
      this.quantidade -= total;
    },
  };
  
  produto2.apresentacao();
  produto2.comprar(20);
  produto2.comprar(20);
  console.log(produto2.quantidade);
  console.log(produto2.calcularPrecoDesconto());

  // resolução aluno:

  let produto3 = {
    nome: "Notebook",
    descricao: "ACER Notebook Nitro 5 AN515-44-R4KA, AMD R7 4800H, 8GB, 512GB SDD, (GTX 1650 com 4 GB) Windows11. 15,6” LED FHD IPS, preto",
    quantidade: 100,
    precoOriginal: 5999,
    desconto: 300,
    calcularPrecoDesconto () {
         let precoDescontado = (this.precoOriginal - this.desconto)
        console.log(`O preço do ${this.nome} com desconto aplicado é de ${precoDescontado.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
        return precoDescontado
    },
    apresentacao () {
        console.log (produto)
    },
    comprar(total) {
        this.quantidade -= total;
        console.log(`Foi realizada a compra de ${total} unidades do ${this.nome}, temos agora em estoque o total de ${this.quantidade} unidades.`)
    }
}
