const nomeDoTurista = prompt("Qual o seu nome?");
let cidades = "";
let contagem = 0;

let continuar = prompt("Você visitou alguma cidade? (Sim/Não)");

while (continuar === "Sim") {
  let cidade = prompt("Qual é o nome da cidade visitada?");
  cidades += " - " + cidade + "\n";
  contagem++;
  continuar = prompt("Você ja visitou alguma outra cidade? (Sim/Não)");
}

alert(
  "Turista: " +
    nomeDoTurista +
    "\n Quantidade de cidades visitadas: " +
    "\n" +
    cidades +
    "\n Numero de cidades visitadas: " +
    contagem
);
