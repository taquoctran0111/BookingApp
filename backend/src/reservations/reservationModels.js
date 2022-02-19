"use strict";

let Sequelize = require("sequelize");
let sequelize = require("../../config/dbConnection");

let Reservation = sequelize.define(
    "reservations",
    {
        user_id: Sequelize.INTEGER,
        hotel_id: Sequelize.INTEGER,
        room_id: Sequelize.INTEGER,
        start_date: Sequelize.DATE,
        end_date: Sequelize.DATE,
        num_stay: Sequelize.INTEGER,
        num_adult: Sequelize.INTEGER,
        num_child: Sequelize.INTEGER,
        total_price: Sequelize.INTEGER
    },
    {
        tableName: "tbl_reservations",
        createdAt: "created_at",
        updatedAt: "updated_at",
        indexes: [
            {
                unique: true,
                fields: ["id"],
            },
        ],
        charset: 'utf8',
        collate: 'utf8_unicode_ci',
    }
);

module.exports = {
    Reservation,
};