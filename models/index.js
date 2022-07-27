// requiring mongoose
let mongoose = require('mongoose')

mongoose.set('debug', true)

// connect to database
mongoose.connect('mongodb://localhost/todos_api')

// alerting mongoose on using promises to handle error
mongoose.Promise = Promise

// require and exporting the todo model
module.exports.Todo = require('./todos.js')