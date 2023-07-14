function somar(a, b) {
  return a + b;
}

const operacao = somar;

console.log(operacao(4, 20));

const subtrair = function (a, b) {
  return a - b;
};

console.log(operacao(4, 5));
