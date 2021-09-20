const escola = [{
  nome: 'turma1',
  alunos: [{
    nome: 'aluno1',
    nota: 8.1
  }, {
    nome: 'aluno2',
    nota: 9.3
  }]
},
{
  nome: 'turma1',
  alunos: [{
    nome: 'aluno3',
    nota: 3.9
  }, {
    nome: 'aluno4',
    nota: 7.3
  }]
}]

const getNotaDoAluno = a => a.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback) {
  return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)