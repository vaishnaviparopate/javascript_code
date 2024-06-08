// const user={
//    value:0,
//    increment(){
//     // value=value+1;
//     console.log(this.value=this.value+1)
//    },
//    decrement(){
//     // value=value-1;
//     console.log(this.value=this.value-1)
//    },
//    reset(){
//     console.log(this.value=0)
//    }
// }
// // console.log(user.increment());
// user.increment();
// user.increment();
// user.increment();
// user.increment();
// user.decrement();
// user.decrement();
// user.reset();
// user.decrement();
// user.decrement();
// user.decrement();
// user.decrement();

// 
// const person={
//     name:"pia",
//     age:"20",
// }
// console.log("age"in person);
// console.log(person.hasOwnProperty("location"));

// console.log(Object.freeze(person));
// person.name="vai"
// console.log(Object.freeze(person["name"]));

// person.location="mumbai"
// console.log(person["name"])



// const items={
//     apple:2,
//     orange:3,
//     mango:4,
// };
// const key=Object.keys(items);
// console.log(key)

// for(let keys in items){
//      console.log(keys);
//     //  console.log(items(keys))
//     console.log(items[keys])
//     console.log(items.orange)
// }

// create an object with 5 employes salary and you 
// have to inncreease the salary by 1000
// const employees={

//     e1:100,
//     e2:200,
//     e3:300,
//     e4:400,
//     e5:500,

// };
// for (let keys in employees){
//     console.log(employees[keys]+1000)
// }



// primitive and non-primitive
// let a=10;
// let b=a;  //copy the value itself
// a=20;
// console.log(a);
// console.log(b)


// nonprimitive
// let a={
//     name:"punam",
// }
// let b=a;  //same memory location
// a.name="vai"
// // delete a.name;
// console.log(a)
// console.log(b)

// console.log( (1+"1"+1))

// var x=5;
// (function (){
//     var x=10;
//     console.log(x)
// })();    // variabble shadowing



// const grooceriees=["banana","apple","peanuts"];
// if(grooceriees.indexOf("apple")){
//     console.log("we have to buy");
// }
// else{
//     console.log( "we not have")
// }



// function arr(array){
//     console.log(array.pop(3))
//     console.log(array)
// }
// arr([1,2,3,4])


// function calculate(num,callback){
//     return callback(num*2)
// }
// function addOne(num){
//     return num+1;

// }
// console.log(calculate(4,addOne))


// const user={
//     name:"jia",
//     sayHi:function(userName="pia"){
//         return `Hello, Good Morning , ${userName}`;   //method
//     },
//     sayBye(greet){
//         return `Hello, Good Night , ${greet}`   //short hand method
//     },
//     sayInSpanish:(greet)=>{
//         return `Hola ${greet}`;
//     }
// }
// console.log(user.sayHi())
// console.log(user.sayBye("See you tomorrow"))
// console.log(user.sayInSpanish("Good Afternoon"))



// const user={
//     name:"jia",
//     sayHi:function(){
//         console.log(this)
//     },
// }
// user.sayHi();


// const person={

//     name:"Additi",
//     age:"25",
//     location:"bengal"
// }
// console.log(person.hasOwnProperty("name"))
// console.log(person.hasOwnProperty("surename"))


// const obj1={
//     name:"Puran",
//     age:20,
//     address:{
//         permanent:"Bengal",
//         temporary:"Jharkhand",
//     },
//     sayHi(){
//         console.log("hello");
//     }
// }
// const obj2=(JSON.parse(JSON.stringify(obj1)));
// // obj2.name="Aditi";
// // obj2.address.permanent="puna"
// console.log(obj1)
// console.log(obj2)
// // console.log(typeof obj2)


// const obj1={
//     name:"puran",
//     age:20
// }
// const obj3={
//     location:"Bengal"
// }
// const obj2=Object.assign({},obj1,obj3);
// obj2.name="jia"
// console.log(obj1)
// console.log(obj2)



// // spread operator - shallow
// const obj1={
//     name:"jiaa",
//     age:30
// }
// const obj3={
//     location:"gao"
// }

// const obj2={...obj1,...obj3}

// console.log(obj2)

// deep copy


// let s=[1,2,3,4,5]
// let arr=s.map((element)=>{
//     return element*element;
// })
// console.log(arr)

