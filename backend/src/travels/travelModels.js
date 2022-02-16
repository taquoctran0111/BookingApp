"use strict";

let Sequelize = require("sequelize");
let sequelize = require("../../config/dbConnection");

let Travel = sequelize.define(
    "travels",
    {
        name: Sequelize.STRING,
        address: Sequelize.STRING,
        city_id: Sequelize.INTEGER,
        price: Sequelize.INTEGER,
        num_room: Sequelize.INTEGER,
        image: Sequelize.STRING,
        thumbnail: Sequelize.STRING,
        description: Sequelize.STRING
    },
    {
        tableName: "tbl_travels",
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
    Travel,
};