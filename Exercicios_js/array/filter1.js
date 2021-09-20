const produtos = [
  { nome: 'p1', preco: 1000, fragil: true},
  { nome: 'p2', preco: 1500, fragil: true},
  { nome: 'p3', preco: 2000, fragil: true},
  { nome: 'p4', preco: 3000, fragil: false},
]
console.log(produtos)

console.log('----------------------------------------')
const resultado = produtos.filter(e => e.fragil == false)
console.log(resultado)

console.log('----------------------------------------')
const resultado2 = produtos.filter(function(p) {
  return p.preco > 1200
})
console.log(resultado2)

console.log('----------------------------------------')
const caroEFragil = produto => (produto.preco > 500 && produto.fragil)
const resultado3 = produtos.filter(caroEFragil)
console.log(resultado3)