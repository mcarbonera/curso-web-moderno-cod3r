const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)
})

console.log('Desafio:')

const mulheresChinesas = mc => mc.pais == 'China' && mc.genero == 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data

    resultado = funcionarios
        .filter(mulheresChinesas)
        .reduce(menorSalario)
    console.log(resultado)
})