//wherever login is mandatory add it in those routes 
//next function will execute when next() is called
import jwt from "jsonwebtoken";
import { User } from "../models/user.js"
export const isAuthenticated = async(req,res,next)=>{
    //make sure ur logged in so we can take id from token
    const {token}= req.cookies;
    //console.log(token)
    if(!token) {
        return res.status(404).json({
            success:false,
            message:"Login first"
        })
    } 
    
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = await User.findById(decoded._id);
        //next jo bhi function hoga isAuthenticated ke baad usme req.user jayega
        next();
}