const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')

const ApiRouter1 = require('./routes/api-router1.js')
const ApiRouter2 = require('./routes/api-router2.js')

const server = express()

server.use(helmet())
server.use(morgan('dev'))
server.use(express.json())

server.use('/api/v1/parse', ApiRouter1)
server.use('/api/v2/parse', ApiRouter2)

const PORT = 5000
server.listen(PORT, () => {
  console.log(`\n** Server is listening on port ${PORT}`)
})
