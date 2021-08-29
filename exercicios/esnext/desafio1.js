const fs = require('fs')
const entrada = __dirname + '/arquivo.json'

function lerArquivo(caminho) {
    return new Promise(resolve => {
        const conteudo = fs.readFileSync(caminho, 'utf-8')
        resolve(conteudo)
    })
}

lerArquivo(entrada)
    .then(console.log)
