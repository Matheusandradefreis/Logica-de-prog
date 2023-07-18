const vagas = [];

function listarVagas() {
  const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
    textoFinal += indice + ". ";
    textoFinal += vaga.nome;
    textoFinal += " (" + vaga.candidatos.length + "candidatos)\n";
    return textoFinal;
  }, "");
  alert(vagasEmTexto);
}

function novaVaga() {
  const nome = prompt("Informe um nome para a sua nova vaga!");
  const descricao = prompt("Informe uma descrição para a sua nova vaga!");
  const dataLimite = prompt(
    "Informe uma data limite para sua nova vaga! dd/mm/aaaa"
  );

  const confirmacao = confirm(
    "Você deseja confirmar sua nova vaga com as seguintes informações?" +
      "Nome da vaga :" +
      nome +
      "Descricação da vaga :" +
      descricao +
      "Data limite da vaga :" +
      dataLimite
  );
  if (confirmacao) {
    const novaVaga = (nome, descricao, dataLimite, (candidatos = []));
    vagas.push(novaVaga);
    alert("Parabéns sua vaga foi criada com sucesso!");
  }
}

function exibirVaga() {
  const indice = prompt("Informe o indice da vaga que deseja exibir :");
  const vaga = vagas[indice];

  const candidatosEmTexto = vaga.candidatos.reduce(function (
    textoFinal,
    candidato
  ) {
    return textoFinal + "- " + candidato;
  },
  "");

  alert(
    "Vaga nº " +
      indice +
      "Nome: " +
      vaga.nome +
      "Descriçaõ :" +
      vaga.descricao +
      "Data limite : " +
      vaga.dataLimite +
      "Quantidade de candidatos :" +
      vaga.candidatos.length +
      "Candidatos inscritos : " +
      candidatosEmTexto
  );
}

function inscreverCandidato() {
  const candidato = prompt("Informe o seu nome: ");
  const inidice = prompt("Informe o ínidice da vaga: ");
  const vaga = vagas[indice];

  const confirmacao = confirm(
    "Deseja inscrever o candidato: " +
      candidato +
      "na vaga: " +
      indice +
      "?\n" +
      "Nome :" +
      vaga.nome +
      "Descrição: " +
      vaga.descricao +
      "Data limite: " +
      vaga.dataLimite
  );
  if (confirmacao) {
    alert("Parabéns, inscrição realizada com sucesso!");
  }
}

function excluirVaga() {
  const indice = prompt("Informe o índice da vaga que deseja excluir:");
  const vaga = vagas[indice];

  const confirmacao = confirm(
    "Tem certeza que deseja excluir a vaga " +
      indice +
      "?\n" +
      "Nome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite
  );

  if (confirmacao) {
    vagas.splice(indice, 1);
    alert("Vaga excluída.");
  }
}

function exibirMenu() {
  const opcao = prompt(
    "Cadastro de Vagas de Emprego" +
      "\n\nEscolha uma das opções" +
      "\n1. Listar vagas disponíveis" +
      "\n2. Criar uma nova vaga" +
      "\n3. Visualizar uma vaga" +
      "\n4. Inscrever um(a) candidato(a)" +
      "\n5. Excluir uma vaga" +
      "\n6. Sair"
  );

  return opcao;
}

function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();

    switch (opcao) {
      case "1":
        listarVagas();
        break;
      case "2":
        novaVaga();
        break;
      case "3":
        exibirVaga();
        break;
      case "4":
        inscreverCandidato();
        break;
      case "5":
        excluirVaga();
      case "6":
        alert("Saindo...");
        break;
      default:
        alert("Opção inválida.");
    }
  } while (opcao !== "6");
}

executar();
