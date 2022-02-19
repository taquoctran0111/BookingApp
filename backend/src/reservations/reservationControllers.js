let express = require("express");
let router = new express.Router();

let {getReservation, getReservations, createReservation, updateReservation, deleteReservation} = require("./reservationServices");

router.get("/", async (req, res, next) => {
    try {
      let result = await getReservations();
      if (result === null) {
        return res.status(404).send({message: "Not found reservations"});
      }
      return res.send({result});
    } catch (error) {
        console.log(error);
      return res.status(500).send({error: "Server Error"});
    }
});

router.get("/:reservationId", async (req, res, next) => {
    try {
      let {reservationId} = req.params;
      let result = await getReservation(reservationId);
      if (result === null) {
        return res.status(404).send({message: "Not found reservation"});
      }
      return res.send({result});
    } catch (error) {
      return res.status(500).send({error: "Server Error"});
    }
});

router.post("/", async (req, res, next) => {
    try {
      let user_id = req.body.user_id;
      let hotel_id = req.body.hotel_id;
      let room_id = req.body.room_id;
      let start_date = req.body.start_date;
      let end_date = req.body.end_date;
      let num_stay = req.body.num_stay;
      let num_adult = req.body.num_adult;
      let num_child = req.body.num_child;
      let total_price = req.body.total_price;

      let result = await createReservation(user_id, hotel_id, room_id, start_date, end_date, num_stay, num_adult, num_child, total_price);
      return res.send({
        message: "Create successfully.",
        data: result
      });
    } catch (error) {
      return res.status(500).send({error: "Server Error"});
    }
});

router.put("/:reservationId", async (req, res, next) => {
    try {
      let {reservationId} = req.params;
      let user_id = req.body.user_id;
      let hotel_id = req.body.hotel_id;
      let room_id = req.body.room_id;
      let start_date = req.body.start_date;
      let end_date = req.body.end_date;
      let num_stay = req.body.num_stay;
      let num_adult = req.body.num_adult;
      let num_child = req.body.num_child;
      let total_price = req.body.total_price;
  
      let result = await updateReservation(reservationId, user_id, hotel_id, room_id, start_date, end_date, num_stay, num_adult, num_child, total_price);
      if (result === null) {
        return res.status(404).send({message: "Update fail!"});
      }
      return res.send({
        message: "Update successfully.",
        data: result
      });
    } catch (error) {
      return res.status(500).send({error: "Server Error"});
    }
});

router.delete("/:reservationId", async (req, res, next) => {
    try {
      let {reservationId} = req.params;
      let result = await deleteReservation(reservationId);
      if (result === null) {
        return res.status(404).send({message: "Delete fail"});
      }
      return res.send({
        message: "Delete successfully.",
        data: result
      });
    } catch (error) {
      return res.status(500).send({error: "Server Error"});
    }
  });
  module.exports = router;
  