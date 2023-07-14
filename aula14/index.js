function calcularMedia(a, b) {
  const media = (a + b) / 2;
  return media;
}

const resultado = calcularMedia(10, 100);

alert(resultado);

function criarProduto(nome, preco) {
  const produto = {
    nome,
    preco,
    estoque: 1,
  };
  return produto;
}
const notebook = criarProduto("Notebook Intel Core I3 8GB", 2500);

console.log(notebook);

function areaRetangular(base, altura) {
  return base * altura;
}

console.log(areaRetangular(3, 5));

function areaQuadrada(lado) {
  return areaRetangular(lado, lado);
}
console.log(areaQuadrada(9));

function ola() {
  let texto = "...";
  return texto;
  texto = "Olá, mundo";
  console.log(texto);
}
console.log(ola());

function maioridade(idade) {
  if (idade >= 18) {
    return "maior de idade";
  } else {
    return "menor de idade";
  }
}

alert(maioridade(13));
