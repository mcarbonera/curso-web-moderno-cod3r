/* IMPLEMENTAÇÃO DO FOREACH */
Array.prototype.forEach2 = function(callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}

const aprovados = ['p1', 'p2', 'p3', 'p4']

aprovados.forEach2(function(nome, indice) {
  console.log(`${indice + 1}) ${nome}`)
})