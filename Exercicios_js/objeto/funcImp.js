const pessoa = {
    nome: 'marcelo',
    idade: 26,
    peso: 70
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave,valor]) => {
    console.log(chave + ': ' + valor);
});

Object.defineProperty(pessoa, 'dataNasc', {
    enumerable: true,
    writable: false,
    value: '04/11/1993'
})

pessoa.dataNasc = '1/1/1'
console.log(pessoa.dataNasc)
console.log(Object.keys(pessoa))

const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest,o1,o2)
console.log(obj)