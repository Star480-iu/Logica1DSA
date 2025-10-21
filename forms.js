// ⚠️ Importante: Para funcionar no navegador ou em plataformas como OneCompiler, certifique-se de que prompt() está disponível.

// Lista de nomes (Array)
let listaNomes = [];
for (let i = 0; i < 10; i++) {
  let nome = prompt(`Digite o nome do cliente ${i + 1}:`);
  listaNomes.push(nome);
}

// Conjunto de e-mails (Set)
let conjuntoEmails = new Set();
while (conjuntoEmails.size < 10) {
  let email = prompt(`Digite um e-mail único (${conjuntoEmails.size + 1}/10):`);
  if (conjuntoEmails.has(email)) {
    alert("Este e-mail já foi cadastrado. Tente outro.");
  } else {
    conjuntoEmails.add(email);
  }
}

// Mapa de ID e telefone (Map)
let mapaTelefones = new Map();
for (let i = 0; i < 10; i++) {
  let id = prompt(`Digite o ID do cliente ${i + 1}:`);
  let telefone = prompt(`Digite o telefone do cliente com ID ${id}:`);
  mapaTelefones.set(id, telefone);
}

// Exibição dos dados
console.log("📋 Lista de Nomes Cadastrados:");
listaNomes.forEach((nome, index) => {
  console.log(`${index + 1}. ${nome}`);
});

console.log("\n📧 Conjunto de E-mails Únicos:");
[...conjuntoEmails].forEach((email, index) => {
  console.log(`${index + 1}. ${email}`);
});

console.log("\n📞 Mapa de Telefones por ID:");
mapaTelefones.forEach((telefone, id) => {
  console.log(`ID: ${id} → Telefone: ${telefone}`);
});
