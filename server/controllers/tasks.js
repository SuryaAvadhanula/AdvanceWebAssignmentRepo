/* B"H
*/
const express = require('express');
const { requireAuth } = require('../models/auth');
const app = express.Router();

const taskModel = require('../models/task');

const CREATED_STATUS = 201;

app
    .get('/', requireAuth, (req, res, next) => {
        taskModel.getAllUserTasks(req.user._id)
            .then(tasks => res.json({ success: true, errors: [], data: tasks }))
            .catch(next);
    })
    .post('/', (req, res, next) => {

        req.body.owner = req.user.handle;
        
        taskModel.create(req.body)
            .then(task => res.status(CREATED_STATUS).json({ success: true, errors: [], data: task }))
            .catch(next);
    })
    .delete('/:id', (req, res, next) => {
        taskModel.remove(req.params.id)
            .then(task => res.json({ success: true, errors: [], data: task }))
            .catch(next);

    })
    .patch('/:id', (req, res, next) => {
        taskModel.update(req.params.id, req.body)
            .then(task => res.json({ success: true, errors: [], data: task }))
            .catch(next);
    })
module.exports = app;