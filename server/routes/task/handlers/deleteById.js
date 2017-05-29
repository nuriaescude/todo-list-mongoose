const Task = require('../../../models/Task')

function deleteById(req,res) {

  const { id } = req.params

  Task
    .findByIdAndRemove(id)
    .then( msg => {
      rres.redirect('/tasks')
    })
    .catch( err => {
      res.json(err)
    })

}

module.exports = deleteById