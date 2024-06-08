// reecursion - function calling itself untill base condittion i not statisied
// inside thee function body

const { attempt } = require("lodash")

// function calling(){
//     return calling();
// }


// function printFactorial(num){
// let s=1
// for (i=1; i<=num; i++){
// s=s*i
// }
// return s
// }
// console.log(printFactorial(5))





// function findPower(b,e){
//    if(e==0){
//     return 1
//    }
    
   
//    return b*findPower(b,e-1)
// }
// console.log(findPower(2,3))

// let arr=[1,2,3]
// function addition(arr){
//     let sum=0
//     for(let i=0; i<arr.length; i++){
//         sum=sum+arr[i]
//     }
//     return sum
// }
// console.log(addition(arr))



// function counter(num) {
//     if (num <= 10) {       
//         console.log(num);  
//         counter(num + 1);  
//     }
// }

// counter(1);  



// function addition(arr){
//     if (arr.length==0){
//         return 0
//     }
//     return arr[0] + addition(arr.slice(1))
// }
// let arr=[1,2,3]
// console.log(addition(arr))


// Write a recursive function that takes a list of numbers as an input and returns the product of all the numbers in the list.
// function findProduct(arr){
//     if(arr.length == 0){
//         return 1
//     }
//     return arr[0] * findProduct(arr.slice(1));
    
// }
// let arr=[1,2,3,4]
// console.log(findProduct(arr))




// Write a recursive function that takes a string and reverse the string.
// function reverseString(str){
    
//     if (str.length === 0){
//         return ""
//     }
//     return str.charAt(str.length-1) + reverseString(str.slice(0,str.length-1))
// }

// let str="hello world";
// console.log(reverseString(str));



// Write a recursive function that takes an array of words and returns an array that contains all the words capitalized.
// input arr :    ['foo', 'bar', 'world', 'hello']
// output arr : ['FOO', 'BAR', 'WORLD', 'HELLO']

// function printCapital(arr){
//     if(arr.length == 0){
//         return [];
//     }
//     return [arr[0].toUpperCase()]. concat(printCapital(arr.slice(1)))
// }

// let arr= ['foo', 'bar', 'world', 'hello']
// console.log(printCapital(arr))



// Write a recursive function to find sum of range a-b numbers.
// example - [5,8]
// sum = 26

// function printSum(a,b){
//     if(a>b){
//         return 0;
//     }
//     return a + printSum(a+1,b)
// }
// console.log(printSum(5,8))


// Write a recursive function that takes a number ‘n’ and returns the nth number of the Fibonacci number.

// function printFibonacci(num){
//     if (num>0){
//         return 0;
//     }
//     else if(num == 1){
//         return 1;
//     }
//     return num + printFibonacci(num+)
// }



// function preparedFood(foodDelivered){
//     setTimeout(()=>{
//         console.log("Food is being prepared");
//         console.log("Food is ready");
//         // foodDelivered(eatingFood);
//         foodDelivered();
//     }, 10000);

// }

// function deliveredFood(eating){
//     setTimeout(()=>{
//         console.log("Food is delivered to your table");
//     //    eating(payment);
//     eating();
//     }, 5000)
    
// }

// function eatingFood(payment){
//     setTimeout(()=>{
//         console.log("Eating Food");
//         // payment(leaveHotel);
//         payment();
//     }, 2000)
    
// }

// function payment(leaving){
//     setTimeout(()=>{
//         console.log("Payment");
//         leaving();
//     }, 1000)
    
// }
// function leaveHotel(){
//     console.log("Leave the Hotel");
// }


// function visitingHotel(){
//     console.log("Entering the Hotel");
//     console.log("Order Food - Biryani ");
//     // preparedFood(deliveredFood);
//     preparedFood(()=>{
//         deliveredFood(()=>{
//             eatingFood(()=>{
//                 payment(()=>{
//                     leaveHotel(()=>{
//                         console.log("thank you for visting")
//                     })
//                 })
//             })
//         })
//     })
// }
// // function rating(){
// //     console.log()
// // }

// visitingHotel();




//ATM
// Enter ATM
// Insert Card
// Processing - 5 seconds
// Enter Pin - 2 seconds
// Withdraw Money - 5 seconds
// Collect Cash - 1 second
// Leave ATM

function Entering(enter){
console.log("Entering the ATM");
enter();
}
function insertingCard(insert){
console.log("inserting ATM card");
insert();
}
function process(takeTime){
    setTimeout(()=>{
        console.log("processing");
        takeTime();
    },5000)

}
function enterPin(pin){
    setTimeout(()=>{
        console.log("Entering the pin")
        pin();
    },2000)
}
function withdrawMoney(money){
    setTimeout(()=>{
        console.log("withdraw money");
        money();
    },5000)
    
}
function collectCash(cash){
   
    setTimeout(()=>{
        console.log("Collect your cash");
        cash();
    },1000)

}

function leaveAtm(){
    console.log("leaving the ATM")
    
}
Entering(()=>{
    insertingCard(()=>{
        process(()=>{
            enterPin(()=>{
                withdrawMoney(()=>{
                    collectCash(()=>{
                        leaveAtm()
                    })
                })
            })
        })
    })
})
