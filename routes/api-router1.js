const router = require('express').Router()
const parsedData = require('../utils/parse-data.js')

router.post('/', (req, res) => {
  const parse = req.body.data
  parsedData(parse)
  res.status(200).json({ message: parse })
})

module.exports = router
