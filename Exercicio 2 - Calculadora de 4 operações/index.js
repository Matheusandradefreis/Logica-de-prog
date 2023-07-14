let x = prompt("Digite o primeiro número");
let y = prompt("Digite o segundo número");

let number1 = parseFloat(x);
let number2 = parseFloat(y);

let soma = number1 + number2;
let subtração = number1 - number2;
let multiplicação = number1 * number2;
let divisão = number1 / number2;

alert(
  "Soma: " +
    soma +
    "\nSubtração: " +
    subtração +
    "\nMultiplicação: " +
    multiplicação +
    "\nDivisão: " +
    divisão
);
