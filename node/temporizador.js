const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * * * * *', function () {
    console.log('Tarefa1', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = new schedule.Range(0,5)
regra.hour = 20
regra.minute = 23
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Tarefa2', new Date().getSeconds())
})

setTimeout(function () {
    tarefa2.cancel()
    console.log('Cancelando Tarefa 2!')
}, 1000000)