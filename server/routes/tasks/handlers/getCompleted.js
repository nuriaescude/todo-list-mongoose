const Task = require(__base + 'models/task')

function getCompleted (req, res) {

  Task.find({done: true})
    .then( tasks =>  {
      res.render('done', { tasks })
    })
}

module.exports = getCompleted