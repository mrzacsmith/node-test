const router = require('express').Router()
const parseData = require('../utils/parse-data.js')
const parsedData = require('../utils/parse-data.js')

router.post('/', (req, res) => {
  const parse = req.body.data
  parseData(parse)
  res.status(200).json({ message: parse })
})

module.exports = router
