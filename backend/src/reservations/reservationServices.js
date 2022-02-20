let {Reservation} = require("./reservationModels");

let findOneReservation = async (model, id) => {
    return await model.findOne({
      where: {
        id: id,
      },
    });
}

let getReservations = async () => {
    let getReservations = await Reservation.findAll();
    if (getReservations === null) {
        return null
      }
    return {
        reservations: getReservations,
    };
}
let getReservationsUserId = async (user_id) => {
  let getReservationsUserId = await Reservation.findAll({
    where: {
      user_id: user_id,
    }
  });
  if (getReservationsUserId === null) {
    return null
  }
  return {
      reservationsUserId: getReservationsUserId,
  };
}
let getReservation = async (reservationId) => {
    let getReservation = await findOneReservation(Reservation, reservationId);
    if (getReservation === null) {
      return null
    }
    return {
        reservation: getReservation,
    };
}

let createReservation = async (user_id, hotel_id, room_id, start_date, end_date, num_stay, num_adult, num_child, total_price) => {
    let result = await Reservation.findOrCreate({
      where: {
        user_id: user_id,
        hotel_id: hotel_id,
        room_id: room_id,
        start_date: start_date,
        end_date: end_date,
        num_stay: num_stay,
        num_adult: num_adult, 
        num_child: num_child,
        total_price: total_price
      }
    });
    return result[0];
}

let updateReservation = async (reservationId, user_id, hotel_id, room_id, start_date, end_date, num_stay, num_adult, num_child, total_price) => {
    let getReservation = await findOneReservation(Reservation, reservationId);
    if (getReservation === null) {
      return null
    }
    await Reservation.update({
        user_id: user_id,
        hotel_id: hotel_id,
        room_id: room_id,
        start_date: start_date,
        end_date: end_date,
        num_stay: num_stay,
        num_adult: num_adult, 
        num_child: num_child,
        total_price: total_price
    }, {
      where: {
        id: reservationId
      }
    })
    let result = await findOneReservation(Reservation, reservationId);
    return result;
}

let deleteReservation = async (reservationId) => {
    let getReservation = await findOneReservation(Reservation, reservationId);
    if (getReservation === null) {
      return null
    }
    await Reservation.destroy({
      where: {
        id: reservationId
      }
    })
    return {};
}

module.exports = {
    getReservations,
    getReservation,
    createReservation,
    updateReservation,
    deleteReservation,
    getReservationsUserId
}