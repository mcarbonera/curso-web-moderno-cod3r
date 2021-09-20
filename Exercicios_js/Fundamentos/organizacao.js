/* Escopo e sentença de código */
console.log("Sentença de código")
{
    {
        console.log("Olá")
        console.log("Mundo")
    }
}

/* Tipos de Dados */
var a = 300
let b = 400
const c = 5 // Constante
console.log(a,b,c)

//let qualquer = 'Legal'    //String
//let qualquer = 123        //Number
let qualquer = 1.23         //Number
console.log(typeof qualquer)
console.log(typeof Number) //Function

/* Tipo: Number */
const peso1 = 1.0
const peso2 = Number('2.0')
console.log(peso1,peso2)
console.log(Number.isInteger(peso1)) // True
console.log(Number.isInteger(peso2)) // True

const avaliacao1 = 9.8
const avaliacao2 = 7.5
const total = avaliacao1*peso1 + avaliacao2*peso2
const media = total/(peso1 + peso2)

console.log(media.toString())
console.log(media.toFixed(2)) // Apenas 2 casas decimais
console.log(media.toString(2)) // Converte para binário

/* Problemas com number: */
console.log(7/0) // Retorna Infinity
console.log('10'/2)
// ^Retorna 5
//console.log('show'/2) // Erro!
console.log(0.1 + 0.7) // Impreciso por causa do ponto flutuante
console.log((10.345).toFixed(2)) // 10.35
