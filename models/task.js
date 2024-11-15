const mongoose = require('mongoose');
 
const TaskSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require:true
    },
    priority:{
        type: Number,
        require: true
    },
    dueDate:{
        type: String,
        require: true
    }
})

const Task = mongoose.model('Task',TaskSchema);
module.exports = Task;