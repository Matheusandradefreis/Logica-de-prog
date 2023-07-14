function areaDoTriangulo() {
  const baseDoTriangulo = prompt("Informe o valor da base do triângulo");
  const alturaDotriangulo = prompt("Informe o valor da altura do triângulo");
  return (baseDoTriangulo * alturaDotriangulo) / 2;
}
function areaDoRetangulo() {
  const baseDoRetangulo = prompt("Informe o valor da base do retângulo");
  const alturaDoRetangulo = prompt("Informe o valor da altura do retângulo");
  return baseDoRetangulo * alturaDoRetangulo;
}
function areaDoQuadrado() {
  const ladoDoQuadrado = prompt("Informe o valor do lado do quadrado");
  return ladoDoQuadrado * ladoDoQuadrado;
}
function areaDoTrapezio() {
  const baseMaiorDoTrapezio = parseFloat(
    prompt("Informe o valor da base maior do trapézio")
  );
  const baseMenorDoTrapezio = parseFloat(
    prompt("Informe o valor da base menor do trapézio")
  );
  const alturaDoTrapezio = prompt("Informe o valor da altura do trapézio");
  return ((baseMaiorDoTrapezio + baseMenorDoTrapezio) * alturaDoTrapezio) / 2;
}
function areadoCirculo() {
  const pi = parseFloat("3,14");
  const raioDoQuadrado = prompt("Informe o valor do raio do quadrado");
  return pi * (raioDoQuadrado * raioDoQuadrado);
}

function exiberMenu() {
  return prompt(
    "Bem vindo a calculadora geométrica" +
      "\nEscolha uma das opções disponivéis" +
      "\n1-Calcular área do triângulo" +
      "\n2-Calcular área do retângulo" +
      "\n3-Calcular área do quadrado" +
      "\n4-Calcular área do trapézio" +
      "\n5-Calcular área do círculo" +
      "\n6-Sair da calculadora"
  );
}

function executar() {
  let opcao = "";
  do {
    opcao = exiberMenu();
    let resultado;

    switch (opcao) {
      case "1":
        resultado = areaDoTriangulo;
        break;
      case "2":
        resultado = areaDoRetangulo;
        break;
      case "3":
        resultado = areaDoQuadrado;
        break;
      case "4":
        resultado = areaDoTrapezio;
        break;
      case "5":
        resultado = areadoCirculo;
        break;
      case "6":
        alert("Encerrando a calculadora ...");
        break;
      default:
        alert("Opção invalida ... ");
    }
    if (resultado) {
      alert("O resultado é " + resultado);
    }
  } while (opcao !== 6);
}
