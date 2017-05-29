const Task = require(__base + 'models/task')

function getPending (req, res) {

  Task.find({done: false})
    .then( tasks =>  {
      res.json(tasks)
    })
}

module.exports = getPending