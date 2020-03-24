//require the library
const mongoose=require('mongoose');
//connect to the library
mongoose.connect('mongodb://localhost/TODO');
//acquire the connection 
const db=mongoose.connection;

//error
db.on('error',console.error.bind(console,'error connecting to database'));
//up and running then print the message
db.once('open',function(){
    console.log('Successfully connected to the database');
});