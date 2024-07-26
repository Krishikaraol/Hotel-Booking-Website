import express from "express";
import Hotel from '../models/hotel.js';
import { createerror } from "../utils/error.js";
import { createhotel, deletehotel, getallhotel, gethotel, updatehotel } from "../controllers/hotel.js";

const router = express.Router();
//create
router.post("/", createhotel);

//update
router.put("/:id", updatehotel);

//delete
router.delete("/:id", deletehotel);

//get
router.get("/:id", gethotel);


//get all
router.get("/", getallhotel);


export default router;