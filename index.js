let express     = require('express'),
    app         = express(),
    todoRoutes  = require('./routes/todo'),
    bodyParser  = require('body-parser')

app.get('/', (req, res)=>{
    res.json({todolist: "manoah on this mehn"})
})


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/api/todos', todoRoutes)

app.listen(9000, ()=>{
    console.log('server is listening')
})