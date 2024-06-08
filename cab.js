// // call,bind and  apply to change the context of the keyword

// const { isArguments } = require("lodash")

// const tea={

//     name:"Green tea",
//     price:100,
//     getprice:function(){
//         console.log(this.price);
//     }
// }
// const coffee={
//     name:"cold coffee",
//     price:150,

// }
// const juice={
//     name:"Orange Juice",
//     price:80,

// }

// // call
// tea.getprice.call(coffee);
// tea.getprice.call(juice);
// tea.getprice()

// var phone={
//     company:"Nokia",
//     modal:"5G",

// }
// var laptop={
//     company:"HP",
//     madal:"Elitebook",

// }
// var bike={
//     company:"Royal Enfield",
//     modal:"Bullet",
// }

// function showprice(price,owner){
//     console.log(this.company + " " + this.modal + " " + price + " " + owner)
// }
// showprice.call(bike,500000,"vaishnavi")
// showprice.call(phone,10000,"tata")

// Apply
// apply - there is only one difference between call and apply
// call = directly pass an Arguments
// apply= you have to use array
// showprice.apply(laptop,[50000,"sia"])


// bind() method - bind will return a function
// bind- creat a function and store it in a variable and call it later
var phone ={
    company:"Nokia",
    price:5000,
    printPrice:function(){
        console.log(this.price);
    }

}
// phone.printPrice()

let res = phone.printPrice.bind(phone);
res();

