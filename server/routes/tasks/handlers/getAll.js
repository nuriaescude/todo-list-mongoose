const Task = require(__base + 'models/task')

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
