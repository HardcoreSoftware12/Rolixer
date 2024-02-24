const express = require("express")
const dotenv = require("dotenv")
dotenv.config()

const app  = express()
const port = process.env.PORT || 3000

const connect = require("./controllers/apiController.js")
const router = require("./routes/index")



app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/",router)



app.listen(port,()=>{
    
    console.log("server started at port",port);
    connect()
    // connects to the postgre sql data base and insrts the dummy data to it.
})