
function filterByDate(transaction,month){
    

let Month = ["jan","feb","mar","apr","may","june","july","aug","sep","oct","nov","dec"];
let date;

//returns month as number
Month.map((ele,i)=>{
    if(ele == month){
        date = i+1
    }
})


let data = [];
transaction.map((product)=>{
    ;
    let month = JSON.stringify(product.dateOfSale)
    // console.log(typeof month);
   
    let mont = month.slice(6,8)
    
    if(mont == date){
        data.push(product);
    }

})


return data;

}

module.exports = filterByDate