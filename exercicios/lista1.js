const exercicio1 = (str) => `Olá, ${str}!`
console.log(exercicio1("Marcelo"))

const exercicio2 = (anos) => anos*365
console.log(exercicio2(25))
console.log(exercicio2(70))

const exercicio3 = (horas, valorHora) => `Salario igual a ${horas*valorHora}`
console.log(exercicio3(150, 40.5))

const exercicio4 = (mes) => {
    meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
    if(mes > 0 && mes <= 12) {
        return meses[mes-1]
    } else {
        return "Problema com parametro"
    }
}
console.log(exercicio4(1))

const exercicio5 = (n1, n2) => n1 >= n2
console.log(exercicio5(0,0))
console.log(exercicio5(0,"0"))
console.log(exercicio5(5,1))

const exercicio6 = (input) => {
    if(typeof input === "number") {
        return input * -1
    } else if(typeof input === "boolean") {
        return !input
    } else {
        return `booleano ou número esperados, mas o parâmetro é dotipo ${typeof input}.`
    }
}
console.log(exercicio6(true))
console.log(exercicio6(15))
console.log(exercicio6(-99.9))
console.log(exercicio6([]))
console.log(exercicio6("123456"))

