import User from "../models/user.js"
import bcrypt from "bcryptjs"
import { createerror } from "../utils/error.js";

export const register=async (req,res,next)=>{
    try {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);

        const newUser=new User({
            username:req.body.username,
            email:req.body.email,
            password:hash,
        })
        await newUser.save()
        res.status(200).send("User has been created") 
    } catch (error) {
        next(error)
    }
}

export const login=async (req,res,next)=>{
    try {
       const user=await User.findOne({username:req.body.username})
        if(!user) return next(createerror(404,"User not found!"))
        const isPasswordCorrect=await bcrypt.compare(req.body.password,user.password)
        if(!isPasswordCorrect) return next(createerror(400,"User not found!"))
        res.status(200).send("User has been created") 
    } catch (error) {
        next(error)
    }
}