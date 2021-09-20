/* tipo função */
console.log(typeof Object) //function

class Produto {}
console.log(typeof Produto) //function

/* Função sem retorno */
function imprimirSoma(a,b) {
    console.log(a+b)
}
imprimirSoma(2,3)
imprimirSoma(2) // 2+undefined == NaN
imprimirSoma(2,3,4) //2+3==5 (ignora o restante)
imprimirSoma() //undefined+undefined == NaN

/* Função com retorno */
function soma(a=0,b=0) {
    return(a+b)
}

console.log(soma(2,3))  //2+3 == 5
console.log(soma(2))    //2+0 == 2
console.log(soma())    //0+0 == 0

/* Armazenando função em variável */
console.log("Função2")

const imprimirSoma2 = function(a,b) {
    console.log(a+b)
}

imprimirSoma2(2,3)

/* Armazenando uma função arrow em uma variável */
const soma2 = (a,b) => {
    return a+b
}

console.log(soma2(2,3))

/* Retorno implicito */
const subtracao = (a,b) => a-b

console.log(subtracao(5,2))