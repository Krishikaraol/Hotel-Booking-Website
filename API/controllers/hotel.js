import Hotel from "../models/hotel.js";

export const createhotel = async (req,res,next)=>{
    const newhotel = new hotel(req.body)

    try {
       const savedhotel = await newhotel.save()
       res.status(200).json(savedhotel) 
    } catch (error) {
       next(error);
    }
}

export const updatehotel = async (req,res,next)=>{
    const newhotel = new hotel(req.body)
    try {
        const updatedhotel = await hotel.findByIdAndUpdate(req.params.id,{$set: req.body},{new: true})
        res.status(200).json(updatedhotel) 
     } catch (error) {
        next(error);
     }
}

export const deletehotel = async (req,res,next)=>{
    const newhotel = new hotel(req.body)
    try {
        await hotel.findByIdAndDelete(req.params.id,{$set: req.body},{new: true})
        res.status(200).json("Hotel has been deleted.") 
     } catch (error) {
        next(error);
     }
}   


export const gethotel = async (req,res,next)=>{
    const newhotel = new hotel(req.body)
    try {
        const hotel = await hotel.findById(req.params.id);
        res.status(200).json(hotel) 
     } catch (error) {
        next(error);
     }
}


export const getallhotel = async (req,res,next)=>{
    const newhotel = new hotel(req.body)
    try {
        const hotels = await hotel.find("asdkjhfewd");
        res.status(200).json(hotels) 
     } catch (error) {
        next(error);
     }
}