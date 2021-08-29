const { reject } = require("lodash")

function gerarNumerosEntre(min, max, numerosRepetidos) {
    if(min > max) [min,max] = [max,min]
    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random()*fator) + min
        if(numerosRepetidos.includes(aleatorio)) {
            reject('Número repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}

gerarNumerosEntre(1,5, [1,2,4])
    .then(console.log)
    .catch(err => console.log(`Erro: ${err}`))
    

async function jogarMegaSena(qtdNumeros) {
    try {
        const numeros = []
        for(let _ of Array(qtdNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1,60,numeros))
        }
        return numeros
    } catch(err) {
        throw "Deu ruim"
    }
}

jogarMegaSena(10)
    .then(console.log)
    .catch(err => console.log(`Erro: ${err}`))