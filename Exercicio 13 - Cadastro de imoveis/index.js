let imoveis = [];
let opção = "";
let imoveissalvos = [];

do {
  opção = prompt(
    "Bem vindo ao cadastro de imoveis. \nTotal de Imoveis: " +
      imoveis.length +
      "\nInforme a ação que você deseja executar" +
      "\n1-Salvar um novo imovel" +
      "\n2- Consultar imoveis salvos" +
      "\n3-Sair"
  );

  switch (opção) {
    case "1":
      const imovel = {};
      alert("Para proseguir informe alguns dados.");
      imovel.proprietario = prompt("Qual o nome do proprietario? ");
      imovel.quartos = parseFloat(
        prompt("Qual a quantidade de quartos que o imovel possui?")
      );
      imovel.banheiro = parseFloat(
        prompt("Qual a quantidade de banheiros que o imovel possui?")
      );
      imovel.garagem = prompt("O imovel possui garagem? (Sim/Não)");

      const confirma = confirm(
        "Salvar esse imovel?\n" +
          "\nProprietario: " +
          imovel.proprietario +
          "\nNumero de quartos: " +
          imovel.quartos +
          "\nNumero de banheiros: " +
          imovel.banheiro +
          "\nPossui garagem: " +
          imovel.garagem
      );

      if (confirma) {
        imoveis.push(imovel);
      }
      break;
    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imóvel " +
            (i + 1) +
            "\nProprietario: " +
            imoveis[i].proprietario +
            "\nQuartos: " +
            imoveis[i].quartos +
            "\nBanheiros: " +
            imoveis[i].banheiro +
            "\nPossui Garagem: " +
            imoveis[i].garagem
        );
      }
      break;
    case "3":
      alert("Encerrando o sistema ...");
      break;
    default:
      alert("Opção invalida ...");
      break;
  }
} while (opção !== "3");
