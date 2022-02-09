import express from "express";
import { getHotels, createHotel, updateHotel} from "../controllers/hotels.js";

const router = express.Router();

router.get('/', getHotels);
router.post('/', createHotel);
router.post('/update', updateHotel);

export default router;