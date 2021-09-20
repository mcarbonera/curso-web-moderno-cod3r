const produto = new Object
produto.nome = 'Cadeira'
produto['marca'] = 'generica'
produto.preco = 220

console.log(produto)
delete produto.preco;
console.log(produto)
delete produto['marca'];
console.log(produto)

const fromJson = JSON.parse('{"info": "informacao"}');
console.log(fromJson);