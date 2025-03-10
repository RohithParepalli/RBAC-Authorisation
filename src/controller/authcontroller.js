import bcrypt from 'bcryptjs';
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';
const register=async(req,res)=>{
    try{
        const{username,password,role} =req.body;
        const hashedpassword = await bcrypt.hash(password,10);
        const newuser = new User({username,password:hashedpassword,role});
        await newuser.save();
        res.status(201).json({message:`User register with username ${username}`})
        }
        catch(err){
            res.status(500).json({message:'Something went wrong'});
        }
};

const login = async(req,res)=>{
    try{
    const{username,password} =req.body;
    const user = await User.findOne({username});
    if(!user){
        res.status(404).json({message:`user with username ${username} not found`});
    }
   const isMatch = await bcrypt.compare(password,user.password);
   if(!isMatch){
   return  res.status(404).json({message:'Invalid Credentials'});
   }
   const token =jwt.sign({id:User._id,role:user.role},process.env.JWT_SECRET,{expiresIn:"1h"});
   res.status(200).json({token});
    }
    catch(err){
        res.status(500).json({message:'Something went wrong'});
    }
};

export {
    register,
    login,
};