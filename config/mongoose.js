const mongoose = require('mongoose');
const DB = 'mongodb+srv://swarupdeb:feedbackapp456@feedbackapp.9nvawfx.mongodb.net/FeedbackApp?retryWrites=true&w=majority'

mongoose.connect(DB).then(()=>{
     console.log('connection successful');
 }).catch((err) => console.log("no connection " + err));

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open',  function(){
     console.log('Connected to Database :: MongoDB');
});

 
module.exports = db;  