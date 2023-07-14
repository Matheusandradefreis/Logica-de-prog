let primeiroNome = prompt("Qual é o seu primeiro Nome?");
let sobreNome = prompt("Qual é o seu sobrenome?");
let campoDeEstudo = prompt("Qual é o seu campo de estudo?");
let anoDeNascimento = prompt("Qual é o seu ano de nascimento?");
let idade = 2023 - anoDeNascimento;

alert(
  "Nome completo: " +
    primeiroNome +
    " " +
    sobreNome +
    "\nCampo de Estudo: " +
    campoDeEstudo +
    "\nIdade: " +
    idade
);
