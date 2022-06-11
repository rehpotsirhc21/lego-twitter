const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection')

class ProfilePic extends Model {}
ProfilePic.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        fig_theme: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fig_name: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fig_url: {
            type: DataTypes.STRING,
            allowNull: false,
            // validate: { isURL: true }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "profilepic",
    }
)

module.exports = ProfilePic