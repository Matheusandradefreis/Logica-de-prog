let veiculo1 = prompt("Informe o nome do veiculo 1");
let velocidade1 = parsefloat(prompt("Informe a velocidade do veiculo 1"));
let veiculo2 = prompt("Informe o nome do veiculo 2");
let velocidade2 = parsefloat(prompt("Informe a velocidade do veiculo 2"));

if (velocidade1 > velocidade2) {
  alert(veiculo1 + " é mais rapido que " + veiculo2);
} else if (velocidade2 < velocidade1) {
  alert(veiculo2 + " é mais rapido que " + veiculo1);
} else if ((velocidade1 = velocidade2)) {
  alert(veiculo1 + " e " + veiculo2 + " tem a mesma velocidade ");
}
