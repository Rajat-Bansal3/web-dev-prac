const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://admin:qnjzMtAMCo7YwJSI@cluster0.1c4wa4w.mongodb.net/?retryWrites=true&w=majority")
const TodoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})
const Todo = mongoose.model('Todo', TodoSchema)

module.exports = Todo
