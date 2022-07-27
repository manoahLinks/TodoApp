const { response } = require('express')
let db = require('../models')

exports.displayAllTodos = (req, res)=>{
    db.Todo.find()
     .then((todos)=>{
         res.json(todos)
     }).catch((err)=>{
         res.send(err)
     })
 }

 exports.createNewTodo = (req, res)=>{
    db.Todo.create(req.body)
        .then((newTodo)=>{
            console.log(req.body)
            res.json(newTodo)
        }).catch((err)=>{
            res.send(err)
        })
}

exports.displayTodoMoreInfo = async (req, res)=>{
    let response = await db.Todo.findById(req.params.todoid)
        .then((response) =>{
            console.log(response.clicks)
            res.json(response)
        }).catch((err)=>{
            res.send(err)
        })
}

exports.updateTodo =  (req, res)=>{
    db.Todo.findByIdAndUpdate(req.params.todoid, req.body, {new: true})
        .then((updatedTodo)=>{
            res.json(updatedTodo)
        }).catch((err)=>{
            res.send(err)
        })
}

exports.deleteTodo =  (req, res)=>{
    db.Todo.findByIdAndRemove(req.params.todoid)
        .then(()=>{
            res.send('we deleted a todo')
        }).catch((err)=>{
            res.send(err)
        })
}

module.exports = exports