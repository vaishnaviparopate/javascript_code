// let a=20
// function show(){
//     let a=20;
//     console.log(a)
//     return function show2(){
//         let a=2;
//         console.log(a);
//     }
// }

// let result=show()
// result()


// function show(){
//     let a=10;
//     return function show2(){
//         let a=20
//         return function show3(){
//             let a=30
//             console.log(a)
//         }
        
//     }
// }

// let result=show()
// let result2=result()
// result2()


// function add(a){
//     return function add1(){
//         console.log(a)
//     }
// }


// let result=add(5)
// // console.log(result)
// result()


// var count=1;
// function counter(){
//     return function (){
//         count++
//         console.log(count)
//     }
//     // return increment;
// }
// let result=counter();
// result()
// result()


// function getCredential(){
//     let username="puran"
//     let password="12345"
//     let count=0
//     return function (){
//         let credential={
//             name:username,
//             pass:password,
//         }
//         if (count%3==0){
//             count+=1;
//             return credential;
//         }
//         count+=1
//     }
// }
// let result=getCredential()
// console.log(result())
// console.log(result())


// function printName(){
//     let name="vaishnavi"
//     let count=0
//     return function(){
//         count++;
//         if (count==3){
//             return name
//         }
//     }
// }
// let result= printName()
// console.log(result())
// console.log(result())
// console.log(result())


function printSum(){
    
}