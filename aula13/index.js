function dobro(x) {
  alert("O dobro de " + x + " é " + x * 2);
}

dobro(5);

function dizerOla(nome = "mundo") {
  alert("Olá, " + nome + "!");
}

dizerOla("Matheus");

function soma(a, b) {
  alert("O Resultado da soma é " + (a + b));
}

soma(15, 20);

function criarUsuario(nome, email, senha, tipo = "admin") {
  const usuario = {
    nome,
    email,
    senha,
    tipo,
  };

  console.log(usuario);
}

criarUsuario("Matheus", "matheudandrade@Outlook.com", "1234");

function objetoComParametros(usuario) {
  usuario.nome;
  usuario.email;
}

const dadosDoUsuario = {
  nome: "",
  email: "",
  endereço: "",
  aniversario: "",
  senha: "",
};

objetoComParametros(dadosDoUsuario);
