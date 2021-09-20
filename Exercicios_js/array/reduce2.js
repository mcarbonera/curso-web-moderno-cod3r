const alunos = [
  { nome: 'joao', nota: 7.3, bolsista: false },
  { nome: 'maria', nota: 9.2, bolsista: true },
  { nome: 'pedro', nota: 9.8, bolsista: false },
  { nome: 'ana', nota: 8.7, bolsista: true },
]

const saoTodosBolsistas = alunos.map(a => a.bolsista).reduce(
  (ac,at) => ac && at)
const algumEhBolsista = alunos.map(a => a.bolsista).reduce(
  (ac,at) => ac || at)

console.log(saoTodosBolsistas)
console.log(algumEhBolsista)