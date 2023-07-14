let dinheiroInicial = parseFloat(
  prompt("Informe a quantidade inicial de dinheiro!")
);
let adicionarOuRemover = prompt(
  "Quantidade de dinheiro disponivel: " +
    dinheiroInicial +
    "\n Selecione uma opção: " +
    "1- Adicionar " +
    "2- Remover" +
    "3- Sair"
);

while (adicionarOuRemover === "1") {
  adicionar = parseFloat(
    prompt("Qual a quantidade de dinheiro que você deseja adicionar?")
  );
  adição = dinheiroInicial + adicionar;
  alert("Você possui: " + adição);
  let adicionarOuRemover = prompt(
    "Quantidade de dinheiro disponivel: " +
      dinheiroInicial +
      "\n Selecione uma opção: " +
      "1- Adicionar " +
      "2- Remover" +
      "3- Sair"
  );
}
while (adicionarOuRemover === "2") {
  remover = prompt("Qual a quantidade de dinheiro que você deseja remover?");
  subtração = dinheiroInicial - remover;
  alert("Você possui: " + subtração);
  let adicionarOuRemover = prompt(
    "Quantidade de dinheiro disponivel: " +
      dinheiroInicial +
      "\n Selecione uma opção: " +
      "1- Adicionar " +
      "2- Remover" +
      "3- Sair"
  );
}
while (adicionarOuRemover === "3") {
  alert("O sistema esta encerrando ...");
}
