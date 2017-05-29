const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const routerTasks = require('./routes/tasks')
const routerTask = require('./routes/task')

const app = express()

const dbUrl = 'mongodb://localhost:27017/test'
const PORT = 3000

// const getPassMiddleware = require('./routes/middlewares/getPass')

mongoose.Promise = Promise
mongoose.connect(dbUrl)

app.locals.moment = require('moment')

// app.use(express.static( path.join(__dirname, '../client')  ))
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '/views'));

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.use(getPassMiddleware)

app.use('/tasks', routerTasks)
app.use('/task', routerTask)

app.listen(PORT)
console.log(`Listening on PORT ${PORT}`);