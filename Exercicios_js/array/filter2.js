// Implementacao do filter
Array.prototype.filter2 = function(callback) {
  const newArray = []
  for(let i = 0; i < this.length; i++) {
    if(callback(this[i], i, this)) {
      newArray.push(this[i])
    }
  }
  return newArray
}

const produtos = [
  { nome: 'p1', preco: 1000, fragil: true},
  { nome: 'p2', preco: 1500, fragil: true},
  { nome: 'p3', preco: 2000, fragil: true},
  { nome: 'p4', preco: 3000, fragil: false},
]

const caroEFragil = produto => (produto.preco > 500 && produto.fragil)
const resultado3 = produtos.filter(caroEFragil)
console.log(resultado3)

const resultadoFilter2 = produtos.filter2(caroEFragil)
console.log(resultadoFilter2)