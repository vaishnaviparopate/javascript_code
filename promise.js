// Promise - a promise is an object that may product a single value some time future: either a resolved value, or a reason that it's not resolved
// (eg. a network error occured)
// A promise nay be in one of 3 possible

// states: fulfilled, rejected, pending

// promise users can attach callvaks to hhandle the fulfilled value or the reason for rejection



// let treet= new Promise(function(resolve,reject){
//     let party = true;
//     if(party){
//         resolve("Party is going on ")
//     }
//     else{
//         reject("no party");
//     }
// });
// treet.then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error)
// })



// let treet= new Promise(function(resolve,reject){
//     let gift= true
//     let party = true;
//     if(gift){
//         resolve(doingParty())
//     }
//     else{
//         reject("party is cancle")
//     }
//     function doingParty(){
//         if(party){
//             resolve("Party is going on ")
//         }
//         else{
//             reject("no party");
//         }
//     }
   
// });
// treet.then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error)
// })



//ATM
// Enter ATM
// Insert Card
// Processing - 5 seconds
// Enter Pin - 2 seconds
// Withdraw Money - 5 seconds
// Collect Cash - 1 second
// Leave ATM

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
    enter().then((result)=>{
        console.log(result);
        return isInsertingCard();
    }).then((result)=>{
        console.log(result);
        return isProcess();
    }).then((result)=>{
        console.log(result);
        return isEnteringpin();
    }).then((result)=>{
        console.log(result);
        return isWithdrawing();
    }).then((result)=>{
        console.log(result);
        return isCollectcash();
    }).then((result)=>{
        console.log(result);
        return leaveAtm();
    }).then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    })

    
