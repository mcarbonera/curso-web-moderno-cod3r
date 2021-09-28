const express = require('express')
const useJson = express.json()

// body parser
const cors = require('cors')

module.exports = (app) => {
    app.use(useJson)
    app.use(cors())
}