const Task = require('../../../models/Task')

function updateById(req, res) {

    const { id } = req.params
    const { title, done } = req.body
    const updatedAt = Date.now()

    const updateData = {}
    if (done) updateData.done = done
    if (title) updateData.title = title

    Task.findByIdAndUpdate(id, updateData)
        .then(msg => {
            res.json(msg)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports = updateById
