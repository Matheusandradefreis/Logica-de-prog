const numeroInicial = parseFloat(prompt("Informe um número de 1 a 20"));
let resultado = "";

for (fator = 1; fator <= 20; fator++) {
  resultado +=
    " -> " + numeroInicial + " * " + fator + " = " + numeroInicial * fator;
}

alert("O resultado da tabuada de " + numeroInicial + "\n\n" + resultado);
