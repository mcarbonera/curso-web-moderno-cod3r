/* Strings */
const escola = "Borala"

console.log(escola.charAt(0)) //B
console.log(escola.charAt(1)) //o
console.log(escola.charAt(6)) // \n
console.log(escola.charAt(200)) // Não dá erro

console.log(escola.charCodeAt(0)) //ASCII de 'B'
console.log(escola.indexOf('o')) // Índice de 'o' em 'Borala' (retorna 1)
console.log(escola.indexOf('a')) // Retorna apenas o primeiro índice (primeiro 'a')

console.log(escola.substring(1, 3)) //Retorna 'or'
// ^ inclui primeiro indice e sem o ultimo

console.log('Escola'.concat(escola).concat("!")) // retorna 'EscolaBorala!'
console.log(escola.replace('o',0)) //retorna 'B0rala'
// ^permite expressoes regulares

/* Template Strings */
const nome = 'Marcelo'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`
console.log(concatenacao,template)

//expressoes
console.log(`1 + 1 = ${1+1}`)

/* FUNÇÃO: */
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)

/* Boolean */
let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(isAtivo) // retorna 1
console.log(!isAtivo) // negação - retorna false

// Retorno verdadeiro (conversão de tipos)
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

// Retorno falso por conversão de tipos
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo=false))

console.log('And-Or')
console.log(true || false)
console.log(true && false)

let login = ''
//let login = 'Marcelo'
console.log(login || 'Desconhecido')

/* Array */
console.log('Ana,Maria,Pedro'.split(','))

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0],valores[4]) //valores[4] não dá erro! Retorna undefined

valores[10] = 10
console.log(valores) //adiciona <6 empty items>

console.log(valores.length) // retorna 11 (0 a 10)

valores.push({id: 3},false,null,'teste') //insere termos
console.log(valores)

console.log(valores.pop()) //remove elemento 'teste' (ultimo)
delete valores[0] //<1 empty item>
console.log(valores)

console.log(typeof valores) // retorna object

/* Object */
const prod1 = {} //objeto
console.log(typeof prod1) 

prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4999.99
prod1['Desconto Legal'] = 0.40 // Evitar atributos com espaço

console.log(prod1) 

// Não é JSON!!
// Porém, é possivel converter objeto em JSON
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            mais1: 2
        }
    }
}
console.log(prod2)

/* Null e Undefined */
console.log("Null e Undefined")

// Cópia por valor:
let d = 3
let e = d
d++
console.log(d)
console.log(e)

// Objeto: cópia por referência
const obja = {name: 'teste'}
console.log(obja)

const objb = obja
console.log(objb)

// exemplo: 
let valorx //nao inicializado
console.log(valorx) //undefined sem erro de compilação
//console.log(valor2) //undefined com erro de compilação

valor = null // não inicialização (explicita)
console.log(valor) //null
//console.log(valor.toString()) // Erro:

const produto = {}
console.log(produto.preco) //undefined
console.log(produto) //{}

produto.preco = 3.5
console.log(produto) // { preco: 3.5 }

produto.preco = undefined //evitar
console.log(!!produto.preco) //false
console.log(produto) // { preco: null }

produto.preco = null //sem preço
console.log(!!produto.preco) //false
console.log(produto) // { preco: null }