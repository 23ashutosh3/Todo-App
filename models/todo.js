const mongoose=require('mongoose');

//DataBase Schema
const TodoSchema=new mongoose.Schema({
    Description:{
        type:String,
        required:true
    },
    Category:{
        type:String,
        required:true
    },
    date: {
        type: Date,
        default: Date.now,
        required:true
      
        } 


    

});
//name of database Schema
const Todoapp=mongoose.model('Todoapp',TodoSchema);
module.exports=Todoapp;