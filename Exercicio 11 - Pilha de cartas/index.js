let baralho = [];
let opcao = "";

do {
  opcao = prompt(
    "Cartas no baralho" +
      baralho.length +
      "\n1-Adicionar uma carta\n2-Remover uma carta\n3-Sair"
  );

  switch (opcao) {
    case "1":
      let cartaAdicionada = prompt("Informe o nome da carta adicionada");
      baralho.push(cartaAdicionada);
      break;
    case "2":
      let cartaRemovida = baralho.pop();
      if (!cartaRemovida) {
        alert("Não existe cartas no baralho");
      } else {
        alert("Você removeu uma carta" + cartaRemovida);
      }
      break;
    case "3":
      alert("Encerrando ...");
      break;
    default:
      alert("Opção Invalida");
  }
} while (opcao !== "3");
