// // ${}-string interpolation

// function greet(name){
// console.log("hello "+name)
// }
// greet("vaishnavi")
// greet(12)
// greet("ppipa")
// greet()
// greet("mumbai","pune")


// // function greet(city,country){
// //     console.log("i am belong to "+ city +" in "+ country);
// // }
// // greet("pune","India")
// // greet()

// function greet(name,age){
// name="hey "+ name;
// console.log(name + age);
// }
// let name=" vaishanvi ";
// greet(name,20);

// let name="pia"
// function greet(name,age){
//     console.log("hii "+name);
// }
// greet(name,20);
// console.log(name)

// function greet(name,age=22){
//     console.log("hello "+name+" you are "+age+" years old")
// }
// greet("jia",20);
// greet("jia",undefined);
// greet("jia",null);

// null vs undefined
// undefined vs not defined
// type error  
// ReferenceError
// SyntaxError

// function place(city,country){
//     if(city==undefined){
//         city="pune";
//     }
//     console.log("i am belongs to "+city+" in "+country);
// }
// place("pune","india")

// function place(city,country){
//     console.log("i belongs to "+ city+" in "+country);
// }
// place("yavtmal","india")

// let number=20
// function passingNumber(num){
//     console.log(num);
// }
// passingNumber(number)


// function passingNumber(num=48){
//     console.log(num);
// }
// passingNumber("uncle")

// function passingArrays(arr){
// for (let i=0; i<6; i++){
//     console.log(arr[i]);
//     }
// }

// passingArrays([10,20,30,40,50]);

// function passingArrays(...num){
//     console.log()
// }


// function printNumber(number){
//     return number[1];
// }
// function passingArrays(num){
//     return num;
// }
// const result=passingArrays(10)*printNumber("ram")
// console.log(result);


// let array=[10,20,30,40,50];
// function passingArrays(arr){
//     arr[0]=100;
//     console.log(arr);
// }
// console.log(array[0]);
// passingArrays(array);


// const obj={
//     name:"jia",
//     age:22
// }
// function printObject(obj){
// console.log(obj.name)
// console.log(obj.age)
// }
// printObject(obj);

// function passingNumber(...num){
//     console.log(num);
//     console.log(num[0]*num[1]);
// }
// passingNumber(100,20,30,40,"jia");

// // function vote(name,age){
// //     if (age>=18){
// //         console .log(`hey ${name} your age is ${age} you are eligible for vote`)
// //     }
// //     else {
// //         console.log(`hey ${name} youe age is${age} you are not eligible for vote`)
// //     }
    
// // }
// // vote("vaishnavi",22);

// // function vote(name,age)=>
//     // if (age>=18)



// => fat arrow
// let sayHello=()=>{
//     return "hello"; //implicit return
// }
// console.log(`result is :${sayHello()}`);  //explicit return

// let add=(a,b)=> a+b
// console.log(10);

// // IIFE-immediately Invoked function expression 
// // (function(value){
// // console.log(value*3)
// // }(5))


// // higher order functon:-higher functon which takes another function as a arguments and return function

function callMyName(name){    //callback function as an argument inside another function
    console.log("hello");

}
function sayHello(func){   //higher order function
    console.log("bye");
    func();
} 
sayHello(callMyName);

// // function first class citizen and first class citizen and first class order.
// // function can be store in variable
// // we can receive a function 

// 1sec=1000ms
// // 5min=1000*60*5
// function visitingHotel(){
//     console.log("order food")
// }
// setTimeout(visitingHotel,2000);



// // temporal dead zone-temporaal dead zone ia time
// // between the varialble creation and the variable initializaation
// // declare hota he lekin accesssible nh hota he

// // let,const=ReferenceError
// // var=undefined

// function hello(){
//     console.log(x)
//     if (true){
//         var x=20
//         console.log(x)
//     }
// }
// hello()

// let x=10;
// let y=20;
// let result=add(x,y);
// console.log(result)
// function add(){

// console.log(x+y) ;

// }


