const express = require('express')
const router = express.Router()

const deleteById = require('./handlers/deleteById')
const updateById = require('./handlers/updateById')

router.delete('/:id', deleteById )
router.put('/:id', updateById)

module.exports = router