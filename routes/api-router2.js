const router = require('express').Router()

router.post('/', (req, res) => {
  res.status(200).json({ message: 'working' })
})

module.exports = router
