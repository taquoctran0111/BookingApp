"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable(
            "tbl_reservations",
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER,
                },
                user_id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                hotel_id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                room_id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                start_date: {
                    type: Sequelize.DATE,
                    aallowNull: false,
                },
                end_date: {
                    type: Sequelize.DATE,
                    aallowNull: false,
                },
                num_stay: {
                    type: Sequelize.INTEGER,
                    allowNull: true,
                },
                num_adult: {
                    type: Sequelize.INTEGER,
                    allowNull: true,
                },
                num_child: {
                    type: Sequelize.INTEGER,
                    allowNull: true,
                },
                total_price: {
                    type: Sequelize.INTEGER,
                    allowNull: true,
                },
                created_at: {
                    type: Sequelize.DATE(3),
                    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
                },
                updated_at: {
                    type: Sequelize.DATE(3),
                    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)"),
                },
            }
        ).then(()=>{
            return queryInterface.addIndex("tbl_reservations", ["id"])
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("tbl_reservations");
    }
}