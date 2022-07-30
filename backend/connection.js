 const mongoose=require("mongoose");
 require('dotenv').config();
 mongoose.connect(`mongodb+srv://${process.env.mongo_user}:${process.env.mongo_password}@cluster0.xx4kn.mongodb.net/?retryWrites=true&w=majority`,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
 },()=>{
     console.log('connected to mongodb');
 });