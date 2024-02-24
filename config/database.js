const { Sequelize } = require("sequelize");

const value="postgres"
//database configuration
const sequelize = new Sequelize('product',process.env.DB_USERNAME,process.env.DB_PASSWORD,{
    dialect:'postgres',
    host:'localhost',
    port:5432,
    logging:false //to avoid consoling the inerted large data from consolling

})

module.exports = sequelize