const carro = [
  '{ "nome": "borracha", "preco": "3.45"}',
  '{ "nome": "caderno", "preco": "13.45"}',
  '{ "nome": "kit", "preco": "41.22"}',
  '{ "nome": "caneta", "preco": "7.50"}'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carro.map(paraObjeto).map(apenasPreco)
console.log(resultado)
console.log('-----------------------')
console.log(carro.map(e => JSON.parse(e)).map(e => e.preco))
