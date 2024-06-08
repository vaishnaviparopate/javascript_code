// async -await = better way of writting Promise, sytatic sugar over promises
// better way to writing async code in javascript
// async before a function always returns a promise


// await= can only br used inside the async function
// await will wait for the promise to be resolved



// function sayName(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("hello there")
//             resolve("hello wolrd");
//         },3000)
//     })
// }

// async function sayHii(){
//     return sayName()
// }
// console.log(sayHii())

// sayHii().then((value)=>{
//     console.log(value)
// })

// async function execute(){
//     let name = "amit"
//     let value= await sayName();
//     console.log(name);
// }
// execute()
 



let enter = function(){
    return new Promise(function(resolve,reject){
        let enter=true
        if (enter){
            resolve("entering in ATM");
        }
        else{
            reject("not entering in ATM");
        }
    })
}

let isInsertingCard = function(){
    return new Promise(function(resolve,reject){
        let insertingCard =true;
        if(insertingCard){
            resolve("inserting the ATM Card");
        }
        else{
            reject("not inserting card the ATM Card");
        }
    })
}

let isProcess = function(){
    return new Promise(function(resolve,reject){
        let processing =true;
        if(processing){
        setTimeout(()=>{
            resolve("Processing the ATM card");
        },2000)
            
        }
        else{
            reject("not inserting card the ATM Card");
        }
    })
}

let isEnteringpin = function(){
    return new Promise(function(resolve,reject){
        let enteringpin =true;
        if(enteringpin){
            resolve("enter the pin");
        }
        else{
            reject("not entering pin");
        }
    })
}
    let isWithdrawing = function(){
        return  new Promise(function(resolve,reject){
            let withdrawing =true;
        if(withdrawing){
            setTimeout(()=>{
                resolve("withdrawing money")
            },4000)
        }
        else{
            reject("not withdrawing money")
        }
        })
    }

let  isCollectcash= function(){
    return new Promise(function(resolve,reject){
        let collectCash =true;
        if(collectCash){
            setTimeout(() => {
                resolve("collect the cash");
            },1000);
        }
        else{
            reject("not entering the money");
        }
    })
}
    let leaveAtm=function(){
        return new Promise(function(resolve,reject){
            let leave=true;
            if(leave){
                resolve("leave the ATM")
            }
            else{
                reject("not withdrawing money")
            }
        })
    
    }
    
    
async function visitingHotel(){
   try{
    console.log("welcome to  the atm");
    await enter();
    console.log("entring the hotel")
    await isInsertingCard();
    console.log("inserting the card")
    await isProcess();
    console.log("Processing the ATM card")
    await isEnteringpin()
        console.log("enetr the pin")
    await isWithdrawing()
    console.log("withdrawing thhe money")
    await isCollectcash()
    console.log("collect the cash")
    await leaveAtm()
    console.log("leave the atm")
   }
   catch(error){
    console.log("error")
   }
}
visitingHotel();