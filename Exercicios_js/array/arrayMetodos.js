const pilotos = ['p1', 'p2', 'p3', 'p4']
console.log(pilotos)
// remove ultimo elemento
pilotos.pop()
console.log(pilotos)

// Adiciona elemento ultima posição
pilotos.push('p5')
console.log(pilotos)

// remove primeiro elemento
pilotos.shift()
console.log(pilotos)

// Adiciona elemento na primeira posição
pilotos.unshift('p6')
console.log(pilotos)


/* SPLICE PODE ADICIONAR OU REMOVER ELEMENTOS */
// adicionar (indice, quantos remove, elementos a adicionar)
pilotos.splice(2,0, 'p7', 'p8')
console.log(pilotos)

// remover
pilotos.splice(3,1)
console.log(pilotos)

/* SLICE */
const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) // novo array
console.log(algunsPilotos2)