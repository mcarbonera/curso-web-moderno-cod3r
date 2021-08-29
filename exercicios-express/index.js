const express = require('express')
const app = express()

const saudacao = require('./saudacaoMid')
const usuarioApi = require('./api/usuario')
require('./api/produto')(app, 'com param!')

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

app.use(express.text());
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.use(saudacao('Marcelo'))

app.use('/opa', (req, res, next) => {
    console.log('teste 1')
    next()
})

app.get('/cliente/relatorio', (req, res) => {
    res.send(`Cliente relatorio: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.get('/cliente/:id', (req, res) => {
    res.send(`Cliente ${req.params.id}`)
})

app.post('/corpo', (req, res) => {
    /*
    let i = 0;
    let corpo = ''
    req.on('data', function(parte) {
      corpo += parte  
      i = i+1
    })

    req.on('end', function() {
        console.log(i)
        res.send(corpo)
    })
    */
   res.send(req.body)
})

app.get('/opa' , (req, resp, next) => {
    console.log('teste 2')
    resp.json({
        name: 'nome',
        price: 12.5,
        discount: 0.12
    })
    
    next()
})

app.use('/opa', (req, res, next) => {
    console.log('teste 3')
    next()
})

app.listen(3000, () => {
    console.log('Executando na porta 3000')
})