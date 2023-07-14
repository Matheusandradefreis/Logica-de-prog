let pessoa = {
  nome: "Matheus",
  idade: 26,
  dizerOla() {
    console.log("Olá, mundo! Meu nome é " + this.nome);
  },
};

console.log(pessoa);

pessoa.dizerOla();

// this. é uma palavra reservada para referenciar ao próprio objeto
