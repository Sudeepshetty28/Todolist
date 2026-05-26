const mongoose=require('mongoose');
//creating schema for user
const userSchema=new mongoose.Schema({
        name:String,    
        email:String,
        age:Number
    })


    const Usermodel=mongoose.model('User',userSchema);
module.exports=Usermodel