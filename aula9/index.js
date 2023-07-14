const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];

// Adicionar Elementos
// push (adicionar elementos no final do array)
arr.push("Borromir");

//unshift (adicionar elementos no começo do array)
arr.unshift("Borromir");

// Remover Elementos
// pop (Remove o ultimo elemtno do array)
arr.pop();

// shift (remover o primeiro elemento do array)
arr.shift();

// Pesquisar por um Elemento
//Includes (Verificar se um elemento existe no array)

arr.includes("Gandalf");

// indexOf (Pesquisar o indice do elemento)

arr.indexOf("Gandalf");

//Cortar e Concatenar os arrays
// slice (criar uma copia de uma parte do array)

const hobbits = arr.slice(0, 4);
const outros = arr.slice(-4);
console.log(arr);
console.log(hobbits);
console.log(outros);

// concat (juntar dois arrays)

const sociedade = hobbits.concat(outros, "Borromir");
console.log(sociedade);

// Substituição dos elementos
// splice (remover um grupo de elementos e substituir por outros)
const Removidos = sociedade.splice(hobbits, 1, "Gandalf, o Cinzento");

// Iterar sobre os Elementos
for (let indice = 0; indice < sociedade.length; indice++) {}
