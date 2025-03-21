import mongoose from "mongoose";

const dbconnect = async ()=>{
  try{  
    const connect= await mongoose.connect(process.env.CONNECT_STRING);
    console.log(`Database Connected : ${connect.connection.host},${connect.connection.name}`);
  }
  catch(err){
    console.log(err);
    process.exit(1);
  }
};

export default dbconnect;