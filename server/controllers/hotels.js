import { HotelsModel } from "../models/hotels.js";

export const getHotels = async (req, res) => {
    try {
        const hotels = await HotelsModel.find();
        console.log('Hotels: ', hotels);
        res.status(200).json(hotels);
    } catch (error) {
        res.status(500).json({error: error});
    }
};

export const createHotel = async (req, res) => {
    try {
        const newHotel = req.body;
        const hotel = new HotelsModel(newHotel);
        await hotel.save();
        res.status(200).json(hotel);
    } catch (error) {   
        res.status(500).json({error: error});
    }
};

export const updateHotel = async (req, res) => {
    try {
        const updateHotel = req.body;
        const hotel = await HotelsModel.findOneAndUpdate({_id: updateHotel._id}, updateHotel, {new: true});
        res.status(200).json(hotel);
    } catch (error) {   
        res.status(500).json({error: error});
    }
};