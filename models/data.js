const {Model,DataTypes} = require("sequelize")
const sequelize = require("../config/database")

class ProductsList extends Model{}



//initializing model for databse
const productList = ProductsList.init({
    title:DataTypes.STRING,
    description : DataTypes.TEXT,
    price : DataTypes.FLOAT,
    dateOfSale : DataTypes.DATE,
    category : DataTypes.STRING,
    sold:DataTypes.BOOLEAN
},{sequelize,modelName:"productList"})

module.exports = productList