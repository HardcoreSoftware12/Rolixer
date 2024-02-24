const axios = require("axios")
const sequelize = require("../config/database")
const productList = require("../models/data")

// const { search } = require("../routes")


//to fetch and seed the data to database
const connect = async(req,res)=>{
    const initializeDatabase = async()=>{
        try{
            const res = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json')
            const transactions = await res.data
            // console.log(res);
            // console.log("data",transaction);
            await sequelize.sync({ force: true }); // Drop existing tables and recreate them
            await productList.bulkCreate(transactions);
            console.log('Database initialized with seed data');
    
        }catch(error){
            console.error('Error initializing database:', error);
    
        }
    }
    
    initializeDatabase();

}



module.exports = connect