const router = require('express').Router()
// require parsedData
const parsedData = require('../utils/parse-data.js')

// @desc    Post data to the parser
// @route   /api/v1/parse
router.post('/', (req, res) => {
  const parse = req.body.data
  let pd = parsedData(parse, req.originalUrl)
  res.status(200).json(pd)
})

module.exports = router
