const express = require("express");
const {allTransaction,statistics, barChart, pieChart, combinedResult} = require("../controllers/transactionController");

const router = express.Router();



router.get("/getAllTransactions",allTransaction)
router.get("/stats",statistics)
router.get("/barchart",barChart)
router.get("/piechart",pieChart)
router.get("/combinedApi",combinedResult)

module.exports = router;