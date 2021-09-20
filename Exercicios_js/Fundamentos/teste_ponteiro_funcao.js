const soma = (a=0,b=0) => a+b
const subtracao = (a=0,b=0) => a-b
const multiplicacao = (a=0,b=0) => a*b
const divisao = (a=0,b=1) => a/b

const calculadora = (func,a,b) => {
    func(a,b)
}

func_vector = []
func_vector[0] = soma
func_vector[1] = subtracao
func_vector[2] = multiplicacao
func_vector[3] = divisao

console.log(func_vector[0](1,2))
console.log(func_vector[1](2,1))
console.log(func_vector[2](2,2))
console.log(func_vector[3](2,2))

/*
console.log(calculadora(soma,1,2))
console.log(calculadora(subtracao,2,1))
console.log(calculadora(multiplicacao,2,2))
console.log(calculadora(divisao,2,2))
*/s