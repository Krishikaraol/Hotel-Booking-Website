import express from "express";
import dotenv from "dotenv";
import mongoose  from 'mongoose';
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import roomsRoute from "./routes/rooms.js";
import hotelsRoute from "./routes/hotels.js";

const app = express();
dotenv.config()

const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connect to mongoDb")
    } catch (error) {
        throw error;
    }
    
}

mongoose.connection.on("Disconnected",()=>{
    console.log("MongoDB disconnected");
})

mongoose.connection.on("Connected",()=>{
    console.log("MongoDB Connected");
})

//middleware
app.use(express.json());
app.use("/auth", authRoute);
app.use("/users", authRoute);
app.use("/hotels", hotelsRoute);
app.use("/rooms", authRoute);

app.use((err,req,res,next)=>{
    const errorstatus = err.status || 500;
    const errorMessage = err.message || "somthing went wrong!"
    return res.status(errorstatus).json({
        success: false,
        status: errorstatus,
        message: errorMessage,
        stack: err.stack
    })
   })

app.listen(8800,()=>{
    connect();
    console.log("Connected to backend!")

})