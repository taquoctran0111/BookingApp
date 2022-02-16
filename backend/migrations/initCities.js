"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable(
            "tbl_cities",
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER,
                },
                name: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
            }
        ).then(()=>{
            return queryInterface.addIndex("tbl_cities", ["id"])
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("tbl_cities");
    }
}