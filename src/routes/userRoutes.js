import  express from 'express';
import verifytoken from '../middlewares/authMiddleware.js';
import authorizeRoles from '../middlewares/roleMiddleware.js';
 const router = express.Router();


 router.get('/admin',
    verifytoken,
    authorizeRoles("admin"),
    (req,res)=>{
    res.json({message:'Welcome Admin'});
 });

router.get('/user',verifytoken,authorizeRoles("admin","user"),(req,res)=>{
    res.json({message:'Welcome User'});
});

router.get('/company',verifytoken,authorizeRoles("admin","company"),(req,res)=>{
    res.json({message:'Welcome Company represetative'});
});

export default router;
