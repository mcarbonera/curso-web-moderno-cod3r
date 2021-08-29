function falarDepoisDe(segundos, frase) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            //resolve(frase)
            reject('erro')
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Massa')
    .then(frase => frase.concat('???'))
    .then(outraFrase => console.log(outraFrase))
    .catch(err => console.log(err))