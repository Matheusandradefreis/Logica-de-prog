function exibirELemento(elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array,
  });
}

const lista = ["Maça", "Banana", "Laranja", "Limão"];

for (let i = 0; i < lista.length; i++) {
  exibirELemento(lista[i]);
}

lista.forEach(exibirELemento);
