let mongoose = require('mongoose')

// defining todo schema
let todoSchema = new mongoose.Schema({
    name:       { type: String, required: true},
    clicks:     { type: Number, default: 0},
    completed:  { type: Boolean, default: false},
    date:       { type: Date, default: Date.now()}
})


// modeling todo schema 
let Todo = mongoose.model('Todo', todoSchema)

// exporting the model
module.exports = Todo