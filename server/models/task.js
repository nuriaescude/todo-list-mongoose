const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    done: {
      type: Boolean,
      default: false
    },
    createdAt: {
      type: Number,
      default: Date.now
    }
})
const Task = mongoose.model('Task', TaskSchema )

module.exports = Task