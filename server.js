const express=require('express');
const path=require('path');
//give host to run
const port=8000;

//databse
const db=require('./config/mongoose');

const Todoapp=require('./models/todo');

const app=express();
//view engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded());
app.use(express.static('assets'));


//find in database if require
app.get('/',function(req,res)
{
Todoapp.find({}, function(err,listAll){
if(err)
{
    console.log("error in fetching work from db");
    return;

}
return res.render('home',{
    title:"My TodoApp",
    todo_list:listAll
});
   
    }
   );
})

//create 

app.post('/todoin',function(req,res)
{
    Todoapp.create({
     Description:req.body.Description,
     Category:req.body.Category,
     date:req.body.date

    },function(err,newTodo)
    {
        if(err)
        {
           
            return;
        }

        console.log('******',newTodo);
        return res.redirect('back');
    });
});


//for deleting data
app.get("/delete-todo", function(req,res){
   



    //get the id from query.id
    let id=req.query.id;
    
    
    
        Todoapp.findByIdAndDelete(id,function(err){
        if(err)
        {
            console.log('error in deleting an object from database');
            return;
        }
        return res.redirect('back');
    
      
    
    });
    });


//listen port    

app.listen(port,function(err)
{
    if(err)
    {
        console.log("err in server");
    }

    console.log('yup my express server running',port);
})