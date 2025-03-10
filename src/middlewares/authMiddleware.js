import jwt from 'jsonwebtoken';

const verifytoken = (req,res,next)=>{
    let token;
    let authHeader = req.headers.authorization||req.headers.authorization;
    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1];

        if(!token){
            res.status(401).json({message:"No token,AUthorization denied"});
        }
        try{
           const decode = jwt.verify(token,process.env.JWT_SECRET);
           req.user=decode;
           console.log("The  Decoded user is :",req.user);
           next();
        }
        catch(error){
            res.status(400).json({message:'Token is not valid'});
        }
    }
}

export default verifytoken;