import express from "express";

const router=express.Router();

router.get("/",(req,res)=>{
    res.send("Hello,This is users")
})

router.post("/",(req,res)=>{
    
})
export default router