import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username :{
      type : String,
      required:true,
      unique:true,
    },
    password :{
        type : String,
        required:true,
        unique:true,
      },
      role:{
        type:String,
        required:true,
        enum:["admin","user","company"],
      }
},{
    timestamps:true
})

const User = mongoose.model('User',userSchema);

export  default User;