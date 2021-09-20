const filhas = ['f1', 'f2']
const filhos = ['f3', 'f4']
const todos = filhas.concat(filhos, 'f5')
console.log(todos, filhas, filhos)

console.log([].concat([[1,2], [3,4], 5, [[6,7]]]))