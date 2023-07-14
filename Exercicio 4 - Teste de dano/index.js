const personagem1 = prompt("Informe o nome do personagem 1");
const poderDeAtaque = prompt("Informe o poder de ataque do personagem 1");
const personagem2 = prompt("Informe o nome do personagem 2");
let pontosDeVida = prompt("Informe os pontos de vida do personagem 2");
const poderDeDefesa = prompt("Informe os pontos de defesa do personagem 2");
const possuiEscudo = prompt("Informe se o personagem tem escudo (SIM/NÃO)");

let danoCausado = 0;

if (poderDeAtaque > poderDeDefesa && possuiEscudo == NÃO) {
  danoCausado = poderDeAtaque - poderDeDefesa;
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo == SIM) {
  danoCausado = (poderDeAtaque - poderDeDefesa) / 2;
}
pontosDeVida -= danoCausado;

alert(
  personagem1 + " causou " + danoCausado + " pontos de dano em " + personagem2
);
alert(
  personagem1 +
    "\nPoder de ataque: " +
    poderDeAtaque +
    "\n\n" +
    personagem2 +
    "\nPontos de vida: " +
    pontosDeVida +
    "\nPoder de defesa: " +
    poderDeDefesa +
    "\nPossui escudo: " +
    possuiEscudo
);
