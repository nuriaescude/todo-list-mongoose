const Task = require('../../../models/Task')

function getCompleted (req, res) {

  Task.find({done: true})
    .then( tasks =>  {
      res.render('done', { tasks })
    })
}

module.exports = getCompleted