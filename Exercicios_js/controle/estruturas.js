function funcao(nota) {
    if(nota >= 7) {
        console.log('aprovado com nota: ' + nota)
    } else {
        console.log('reprovado')
    }
}

funcao(8.1)
funcao(6.1)

function funcao2(valor) {
    if(valor) {
        return 'verdade - ' + valor
    } else {
        return 'nao deu'
    }
}

console.log('1)', funcao2())
console.log('2)', funcao2(null))
console.log('3)', funcao2(undefined))
console.log('4)', funcao2(NaN))
console.log('5)', funcao2(''))
console.log('6)', funcao2(0))
console.log('7)', funcao2(-1))
console.log('8)', funcao2(' '))
console.log('9)', funcao2('?'))
console.log('10)', funcao2([]))
console.log('11)', funcao2([1,2]))
console.log('12)', funcao2({}))

console.log('-----------------')

function func3(num) {
    if(num>7) {
        console.log(num)
    }
}

func3(6)
func3(8)

console.log('-----------------')
Number.prototype.entre = function (inicio,fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if(nota.entre(9,10)) {
        console.log('top')
    } else if(nota.entre(7,8.99)){
        console.log('aprovado')
    } else if(nota.entre(4,6.99)){
        console.log('recuperação')
    } else if(nota.entre(0,3.99)){
        console.log('reprovado')
    } else {
        console.log('nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2)
imprimirResultado(200)
imprimirResultado(-1)
imprimirResultado(3.999)

console.log('-----------------')

const imprimirResultado2 = function (nota) {
    switch(Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Top')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
            break
    }
}

imprimirResultado2(10)
imprimirResultado2(8)
imprimirResultado2(6)
imprimirResultado2(3)
imprimirResultado2(-1)

console.log('-----------------')

function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0
while(opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1,100)
    console.log('numero: ' + opcao)
}

console.log('-----------------')

do {
    opcao = getInteiroAleatorioEntre(-1,100)
    console.log('numero: ' + opcao)
} while(opcao != -1)

console.log('-----------------')
let contador = 1
while(contador <= 10) {
    console.log('contador: ' + contador)
    contador++
}

for(let i = 1; i<=10; i++) {
    console.log('i = ' + i)
}

console.log('-----------------')
const meuVetor = [10,20,30,40,50]

for (idx in meuVetor) {
    console.log(idx, meuVetor[idx])
}

const pessoa = {
    nome: 'ana',
    sobrenome: 'silva',
    idade: 29,
    peso: 64
}

for (let atributo in pessoa) {
    console.log(atributo, pessoa[atributo])
}

console.log('-----------------')
const nums = [1,2,3,4,5,6,7,8,9,10]

for (x in nums) {
    if(x == 5) break
    console.log('' + x + '=' + nums[x])
}

console.log('*** Teste 2 ***')
for (y in nums) {
    if(y == 5) continue
    console.log('' + y + '=' + nums[y])
}