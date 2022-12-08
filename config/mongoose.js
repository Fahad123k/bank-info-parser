// getting-started.js
const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/Bank-parsed-data');

const db= mongoose.connection;

db.on('error',console.error.bind(console,"Error to connecting to mongoDB"));

db.once('open',function(){
    console.log("conneected to database")
})

module.exports=db;