const express = require('express')
const router = express.Router()

const getAll = require('./handlers/getAll')
const addTask = require('./handlers/addTask')
const getPending = require('./handlers/getPending')
const getCompleted = require('./handlers/getCompleted')

router.get('/', getAll)
router.post('/', addTask )
router.get('/pending', getPending)
router.get('/done', getCompleted)

module.exports = router