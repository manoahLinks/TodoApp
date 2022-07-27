// requiring express and express router
let express = require('express'),
    router  = express.Router(),
    db      = require('../models')
    helpers = require('../helpers/todos')

//display all todos && create a new todo
router.route('/')
    .get(helpers.displayAllTodos)
    .post(helpers.createNewTodo)

// retrieve a todo && update a todo && delete a todo
router.route('/:todoid')
    .get(helpers.displayTodoMoreInfo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo)

module.exports = router;
