const Task = require('../../../models/Task')

function getPending (req, res) {

  Task.find({done: false})
    .then( tasks =>  {
      res.json(tasks)
    })
}

module.exports = getPending