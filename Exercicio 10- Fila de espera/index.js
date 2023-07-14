let fila = [];
let opção = "";

do {
  let pacientes = "";
  for (let i = 0; i < fila.length; i++) {
    pacientes += i + 1 + " º - " + fila[i] + "\n";
  }

  opção = prompt(
    "Pacientes " +
      pacientes +
      "\nEscolha uma ação valída: " +
      "\n1-Novo Paciente\n2- Consultar Paciente\n3-Sair"
  );
  switch (opção) {
    case "1":
      const novoPaciente = prompt("Qual é o nome do Paciente?");
      fila.push(novoPaciente);
      break;
    case "2":
      const pacienteConsultado = fila.shift();
      if (!pacienteConsultado) {
        alert("Não há pacientes na fila");
      } else alert(pacienteConsultado + "Foi atendido(a) com sucesso!");
      break;
    case "3":
      alert("Encerando ...");
      break;
    default:
      alert("Opção Invalída!");
  }
} while (opção !== "3");
