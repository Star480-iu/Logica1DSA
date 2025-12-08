// Criando o array com pelo menos 5 nomes fictícios
const clientes = ["Ana Souza", "Carlos Pereira", "Mariana Lima", "João Silva", "Fernanda Costa"];

// Usando o loop for...of para percorrer o array
for (const cliente of clientes) {
    console.log(`Enviando e-mail de agradecimento para ${cliente}.`);
}  

// Lista de compras com pelo menos 10 registros
const compras = [
  { cliente: "Ana", dataCompra: "2025-11-20" },
  { cliente: "Bruno", dataCompra: "2025-11-05" },
  { cliente: "Carla", dataCompra: "2025-12-01" },
  { cliente: "Diego", dataCompra: "2025-10-30" },
  { cliente: "Eduarda", dataCompra: "2025-11-25" },
  { cliente: "Felipe", dataCompra: "2025-12-03" },
  { cliente: "Gabriela", dataCompra: "2025-09-15" },
  { cliente: "Henrique", dataCompra: "2025-11-28" },
  { cliente: "Isabela", dataCompra: "2025-12-05" },
  { cliente: "João", dataCompra: "2025-11-10" }
];

// Data atual
const hoje = new Date();

// Função para calcular diferença em dias
function diferencaDias(data1, data2) {
  const umDia = 1000 * 60 * 60 * 24; // milissegundos em um dia
  return Math.floor((data1 - data2) / umDia);
}

// Usando forEach para filtrar e exibir clientes
console.log("Clientes que compraram nos últimos 30 dias:");
compras.forEach(compra => {
  const dataCompra = new Date(compra.dataCompra);
  const dias = diferencaDias(hoje, dataCompra);

  if (dias <= 30 && dias >= 0) {
    console.log(`- ${compra.cliente} (Compra em ${compra.dataCompra})`);
  }
});

// Lista com nomes repetidos
const nomes = [
  "Ana", "Carlos", "Maria", "Ana", "João", "Carlos", "Pedro", "Maria"
];

// Criando um Set a partir da lista
const nomesUnicos = new Set(nomes);

// Usando o iterador do Set para percorrer os elementos
const iterador = nomesUnicos.values();

console.log("Nomes únicos na lista:");
for (let nome of iterador) {
  console.log(nome);
}
