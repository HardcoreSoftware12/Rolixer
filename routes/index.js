const express = require("express")
const router = express.Router()
const apiRouter = require("../routes/apiRoute")
const allTransaction = require("../controllers/transactionController")


//index route
router.get("/",(req,res)=>{
    res.status(200).json({msg:"hit the endpoints"})
})


router.use("/api",apiRouter)


module.exports = router