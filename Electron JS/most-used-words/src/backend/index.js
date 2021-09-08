const { ipcMain } = require('electron')

const pathsToRows = require('./pathsToRows')
const prepareData = require('./prepareData')
const groupWords = require('./groupWords')

console.log("main process carregado")

ipcMain.on('process-subtitles', async (event, paths) => {
    pathsToRows(paths)
        .then(rows => prepareData(rows))
        .then(words => groupWords(words))
        .then(groupedWord => {
            console.log(groupedWord)
            event.reply('process-subtitles', groupedWord)
        })
    //console.log('mensagem recebida: ' + paths)
    //event.reply('process-subtitles', 'pong');
})