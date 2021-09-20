console.log(typeof Array)
console.log(typeof (new Array))
console.log(typeof [])

console.log('-----------------------')

let aprovados = new Array('a','b','c')
console.log(aprovados)

aprovados = ['b', 'c', 'd']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

console.log('-----------------------')
aprovados[3] = 'teste'
aprovados.push('caracas')
console.log(aprovados.length)

aprovados[9] = 'marcelo'
console.log(aprovados)
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log('-----------------------')
aprovados.sort()
console.log(aprovados)

console.log('-----------------------')
delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

console.log('-----------------------')
aprovados = ['a', 'b', 'c']
aprovados.splice(1,2)
console.log(aprovados)

aprovados = ['a', 'b', 'c']
aprovados.splice(1,2, 'elem1', 'elem2')
console.log(aprovados)