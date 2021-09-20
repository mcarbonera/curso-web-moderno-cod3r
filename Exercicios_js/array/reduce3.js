// Implementacao do reduce
Array.prototype.reduce2 = function(callback) {
  let acumulador = this[0]
  for(let i = 1; i < this.length; i++) {
    acumulador = callback(acumulador, this[i], i, this)
  }
  return acumulador
}

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

const saoTodosBolsistas2 = alunos.map(a => a.bolsista).reduce2(
  (ac,at) => ac && at)
const algumEhBolsista2 = alunos.map(a => a.bolsista).reduce2(
  (ac,at) => ac || at)

console.log(saoTodosBolsistas)
console.log(saoTodosBolsistas2)
console.log(algumEhBolsista)
console.log(algumEhBolsista2)