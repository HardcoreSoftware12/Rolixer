const sequelize = require("../config/database");
const productList = require("../models/data")
const {Op} = require("sequelize")
// const pool = require("pool")
const filterByDate = require("../filterByDate")
const axios = require("axios")




const allTransaction = async(req,res)=>{
    

    try {
        const {search, month} = req.query;
        let transaction=[] 

        
        //Sending data based on search and month params

        const whereCondition = {
            [Op.or]: [
              { title: { [Op.iLike]: `%${search}%` } }, // operator iLike case-insensitive
              { description: { [Op.iLike]: `%${search}%` } }, 
              { price: parseFloat(search) || null }, 
            ],
          };

        transaction = await productList.findAll({
            where:whereCondition,
        });

        //IF NO SEARCH PARAM IS GIVEN JUST SEND ALL RECORDS OF THAT MONTH
        if(search === ""){
            const data = filterByDate(transaction,month)
            return res.json(data)
        }
        const data = filterByDate(transaction,month)
        let count = transaction.length;
        // console.log(data);

       
        res.json(data)

        
        
    } catch (error) {
        console.error('Error fetching product transactions:', error);
        res.status(500).json({ error: 'Internal server error' });
        
    }

}


//statistics -[no of sold items,total sale amount and not sold items]
const statistics = async(req,res)=>{
    const {month} = req.query;

    try {
        let transactions = await  productList.findAll({})
        
        let data = filterByDate(transactions,month)
       
        let sold=0;
        let totalSaleAmount=0;
        let notSold=0;
        data.map((product,i)=>{
            // console.log(product);
            if(product.sold){
                sold += 1;
                totalSaleAmount += product.price

            }else{
                notSold += 1
            }
        })
        // price = Math.round(price);
        const statData = {data,sold,notSold,totalSaleAmount}
        res.status(200).json(statData)
    } catch (error) {
        console.error("cannot fetch data",error)
        
    }

}

//barchart data
const barChart = async(req,res)=>{
    try {
        const {month} = req.query;
        const transactions = await productList.findAll({});
        let data = filterByDate(transactions,month);
        // console.log(data);
        let barchart = []
        let priceranges = [
            {range :'0- 100', min:0, max:100},
            {range :'101- 200', min:101, max:200},
            {range :'201- 300', min:201, max:300},
            {range :'301- 400', min:301, max:400},
            {range :'401- 500', min:401, max:500},
            {range :'501- 600', min:501, max:600},
            {range :'601- 700', min:601, max:700},
            {range :'701- 800', min:701, max:800},
            {range :'801- 900', min:801, max:900},
            {range :'901- above', min:901, max:Infinity}
        ]

    //   for(const range of priceranges){
    //     data.map((product,index)=>{
            
    //         if(product.price >= range.min && product.price <= range.max){ 
               
    //             barchart.push({range : range.range})
    //         }
    //     })
    //   }

    for(const range of priceranges){
        const count = data.filter(product => product.price >= range.min && product.price <= range.max).length;
        barchart.push({range : range.range, items:count})
    }

    res.status(200).json({text:"Using this data we can create barchart",barchart})
    
        

        
    } catch (error) {
        console.error("error",error)
        
    }

}



const pieChart = async(req,res)=>{
    const{month} = req.query;
   


    try {
        const transactions = await productList.findAll({});
        const data = filterByDate(transactions,month)
    
        let pieArray = {};
        
        // data.map((product,index)=>{
        //     let count=1
        //     if(pieArray.includes({category:product.category , items : count})){
        //         console.log("heo");
        //     }else{
        //         let cat = product.category;
                
        //         pieArray.push({category:cat , items : count})
    
        //     }
        // })

        
            data.forEach(product =>{
                let category = product.category
                if(pieArray[category]){
                    pieArray[category]++
                }else{
                    pieArray[category] = 1 ;
                }
            })

        
        
        console.log(pieArray);
        res.json(pieArray)

        
    } catch (error) {
        console.error("error",error)
        
    }
 

}


const combinedResult = async(req,res)=>{
    const{month} = req.query
    console.log(month);
    try {
        //STATISTICS
        const statistics = await axios.get(`http://localhost:3000/api/stats?month=${month}`)
        const data = statistics.data
        let statData = {
            sold : data.sold,
            notSold : data.notSold,
            price : data.price
        }

        //BARCHART
        const barchart = await axios.get(`http://localhost:3000/api/barchart?month=${month}`)
       
        //PIECHART
        const piechart = await axios.get(`http://localhost:3000/api/piechart?month=${month}`)
        
       
        //COMBINED RESPONSE
        const combined = {
            "Statistic Report" : statData,
            "Barchart" : barchart.data.barchart,
            "Piechart" : piechart.data
        }

        res.json(combined)
     
    
    } catch (error) {
        console.error(error)
        
    }

}


module.exports = {allTransaction,statistics,barChart,pieChart,combinedResult}