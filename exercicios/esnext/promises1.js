let a = 1
console.log(a)

console.log(typeof Promise) // retorna function

let p = new Promise(function(resolve) {
    resolve(3)
})

p.then(function(valor) {
    console.log(valor)
})

p.then(valor => console.log(valor))

console.log('-----------------------------')
const primeiraPalavra = lista => lista[0]
const primeiraLetra = palavra => palavra[0]
new Promise(function(resolve) {
    resolve(['ABC','BCD','CDE','DEF'])
}).then(primeiraPalavra)
    .then(primeiraLetra)
    .then(console.log)