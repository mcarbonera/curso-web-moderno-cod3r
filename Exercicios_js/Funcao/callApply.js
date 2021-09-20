function getPreco(imposto = 0, moeda = 'R$') {
    return '' + moeda + (this.preco * (1-this.desc) * (1+imposto));
}

const produto = {
    nome: 'notebook',
    preco: 4000,
    desc: 0.15,
    getPreco
}

globalThis.preco = 20
globalThis.desc=0.1

console.log(getPreco())
console.log(produto.getPreco())

const carro = {
    preco: 50000,
    desc: 0.2,
}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [0.17, '$']))