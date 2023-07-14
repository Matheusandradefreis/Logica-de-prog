let opcao = "";

do {
  let opcao = prompt(
    "Bem vindo(a) a calculadora Geométrica!" +
      "\nEscolha uma das opções disponiveis: " +
      "\n1-Área do triângulo" +
      "\n2-Área do retângulo" +
      "\n3-Área do quadrado" +
      "\n4-Área do trapézio" +
      "\n5-Área do círculo" +
      "\n6-Sair"
  );

  switch (opcao) {
    case "1":
      let baseTriangulo = parseFloat(prompt("Informe o valor da base"));
      let alturaTriangulo = parseFloat(prompt("Informe o valor da altura"));
      alert("A área do triângulo é " + (baseTriangulo * alturaTriangulo) / 2);
      break;
    case "2":
      let baseRetangulo = parseFloat(prompt("Informe o valor da base"));
      let alturaRetangulo = parseFloat(prompt("Informe o valor da altura"));
      alert("A área do retângulo é " + baseRetangulo * alturaRetangulo);
      break;
    case "3":
      let ladoQuadrado = parseFloat(prompt("Informe o valor do lado "));
      alert("A área do quadrado é " + ladoQuadrado * ladoQuadrado);
      break;
    case "4":
      let baseMaior = parseFloat(
        prompt("Informe o valor da base maior do trapézio")
      );
      let baseMenor = parseFloat(
        prompt("Informe o valor da base menor do trapézio")
      );
      let alturaTrapezio = parseFloat(
        prompt("Informe o valor da altura do trapézio")
      );
      alert(
        "A área do trapézio é " + ((baseMaior + baseMenor) * alturaTrapezio) / 2
      );
      break;
    case "5":
      let pi = parseFloat("3,14");
      let raioCirculo = parseFloat(
        prompt("Informe o valor do raio do círculo")
      );
      alert("A área do círculo é " + pi * (raioCirculo * raioCirculo));
      break;
    case "6":
      alert("Saindo do sistema ...");
      break;
    default:
      alert("Informe uma opção valída!");
      break;
  }
} while (calculadora !== 6);
