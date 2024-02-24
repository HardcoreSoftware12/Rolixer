// const transaction = [
// 	{
// 		"id": 12,
// 		"title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
// 		"description": "Expand your PS4 gaming experience Play anywhere Fast and easy setup Sleek design with high capacity 3year manufacturers limited warranty",
// 		"price": 798,
// 		"dateOfSale": "2022-03-27T14:59:54.000Z",
// 		"category": "electronics",
// 		"createdAt": "2024-02-24T05:25:28.551Z",
// 		"updatedAt": "2024-02-24T05:25:28.551Z"
// 	},
// 	{
// 		"id": 14,
// 		"title": "Samsung 49Inch CHG90 144Hz Curved Gaming Monitor LC49HG90DMNXZA  Super Ultrawide Screen QLED ",
// 		"description": "49 INCH SUPER ULTRAWIDE 329 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT QLED TECHNOLOGY HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur ghosting and reduce input lag",
// 		"price": 4999.95,
// 		"dateOfSale": "2022-01-27T14:59:54.000Z",
// 		"category": "electronics",
// 		"createdAt": "2024-02-24T05:25:28.551Z",
// 		"updatedAt": "2024-02-24T05:25:28.551Z"
// 	},
// 	{
// 		"id": 32,
// 		"title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
// 		"description": "Expand your PS4 gaming experience Play anywhere Fast and easy setup Sleek design with high capacity 3year manufacturers limited warranty",
// 		"price": 1026,
// 		"dateOfSale": "2022-05-27T14:59:54.000Z",
// 		"category": "electronics",
// 		"createdAt": "2024-02-24T05:25:28.551Z",
// 		"updatedAt": "2024-02-24T05:25:28.551Z"
// 	},
// 	{
// 		"id": 34,
// 		"title": "Samsung 49Inch CHG90 144Hz Curved Gaming Monitor LC49HG90DMNXZA  Super Ultrawide Screen QLED ",
// 		"description": "49 INCH SUPER ULTRAWIDE 329 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT QLED TECHNOLOGY HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur ghosting and reduce input lag",
// 		"price": 999.99,
// 		"dateOfSale": "2021-09-27T14:59:54.000Z",
// 		"category": "electronics",
// 		"createdAt": "2024-02-24T05:25:28.551Z",
// 		"updatedAt": "2024-02-24T05:25:28.551Z"
// 	},
// 	{
// 		"id": 52,
// 		"title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
// 		"description": "Expand your PS4 gaming experience Play anywhere Fast and easy setup Sleek design with high capacity 3year manufacturers limited warranty",
// 		"price": 1254,
// 		"dateOfSale": "2022-07-27T14:59:54.000Z",
// 		"category": "electronics",
// 		"createdAt": "2024-02-24T05:25:28.551Z",
// 		"updatedAt": "2024-02-24T05:25:28.551Z"
// 	},
// 	{
// 		"id": 54,
// 		"title": "Samsung 49Inch CHG90 144Hz Curved Gaming Monitor LC49HG90DMNXZA  Super Ultrawide Screen QLED ",
// 		"description": "49 INCH SUPER ULTRAWIDE 329 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT QLED TECHNOLOGY HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur ghosting and reduce input lag",
// 		"price": 999.99,
// 		"dateOfSale": "2021-09-27T14:59:54.000Z",
// 		"category": "electronics",
// 		"createdAt": "2024-02-24T05:25:28.551Z",
// 		"updatedAt": "2024-02-24T05:25:28.551Z"
// 	}
// ]



function filterByDate(transaction,month){
    console.log("till here",month);
    
// let monthSearch = "mar"
let Month = ["jan","feb","mar","apr","may","june","july","aug","sep","oct","nov","dec"];
let date;
//returns month as number
Month.map((ele,i)=>{
    if(ele == month){
        date = i+1
    }
})
console.log("nim",date)

let data = [];
transaction.map((product)=>{
    // console.log(product.dateOfSale);
    let month = JSON.stringify(product.dateOfSale)
    // console.log(typeof month);
   
    let mont = month.slice(6,8)
    // console.log("month",mont);
    if(mont == date){
        data.push(product);
    }

})
// console.log(data);


return data;

}

module.exports = filterByDate