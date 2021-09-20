/* ARITMETICOS */
const [a,b,c,d] = [3,5,1,15]
const soma = a+b+c+d
const sub = d-b
const mult = a*b
const div = d/a
const mod = a%2

console.log(soma)
console.log(sub)
console.log(mult)
console.log(div)
console.log(mod)

console.log('-----------------------')
/* RELACIONAIS */
console.log('01)', '1' == 1)
console.log('02)', '1' === 1)
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)
console.log('05)', 3<2)
console.log('06)', 3>2)
console.log('07)', 3<=2)
console.log('08)', 3>=2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1===d2)
console.log('10)', d1==d2)
console.log('11)', d1.getTime() === d2.getTime())
console.log('12)', undefined == null)
console.log('13)', undefined === null)

console.log('-----------------------')
/* LÓGICOS */
function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50Pol = trabalho1 && trabalho2
    
    const comprarTv32Pol = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32Pol2 = trabalho1 != trabalho2

    const manterSaudavel = !comprarSorvete // operador unário

    return {
        comprarSorvete, comprarTv50Pol, comprarTv32Pol, manterSaudavel
    }
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))

console.log('-----------------------')
/* UNÁRIOS */
let num1 = 1
let num2 = 2
num1++
console.log(num1)
--num1
console.log(num1)
console.log(++num1 === num2--)

console.log('-----------------------')
/* TERNÁRIO */
const resultado = nota => nota>=7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.9))