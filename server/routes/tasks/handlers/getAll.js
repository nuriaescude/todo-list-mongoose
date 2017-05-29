const Task = require('../../../models/Task')

function getAll(req, res) {

    Task.find()
    	.then( tasks => {
    		res.render('tasks', { tasks })

    	})
        .catch(err => {
            res.json(err)
        })
}

module.exports = getAll
