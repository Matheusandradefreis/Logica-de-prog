let medida = prompt("Informe uma unidade de medida em metros (m)");
let unidade = prompt(
  "Para qual unidade de medida deseja converter?" +
    "\n1- milimetros (mm)" +
    "\n2- centimetros(cm)" +
    "\n3- decímetros(dm)" +
    "\n4- decametros (dam)" +
    "\n5- hectometros(hm)" +
    "\n6- quilometros(km)"
);

switch (unidade) {
  case "1":
    alert("Resultado: " + unidade + "m = " + medida * 1000 + "mm");
    break;
  case "2":
    alert("Resultado: " + unidade + "m = " + medida * 100 + "cm");
    break;
  case "3":
    alert("Resultado: " + unidade + "m = " + medida * 10 + "dm");
    break;
  case "4":
    alert("Resultado: " + unidade + "m = " + medida / 10 + "dam");
    break;
  case "5":
    alert("Resultado: " + unidade + "m = " + medida / 100 + "hm");
    break;
  case "6":
    alert("Resultado: " + unidade + "m = " + medida / 1000 + "km");
    break;
  default:
    alert("Opção Invalida");
    break;
}
