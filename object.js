// primitve and non-primitive
// primitive:-These are immutable data types directly operated upon by their value.
//  In JavaScript, there are six primitive data types:(null,boolean,string,number, undefind,)

// non-primitive :-These are mutable data types(object , arraay, functon, date) 
// Non-primitive types can hold multiple values and have methods to operate on them. 

// let user={
//     name:"pia",
//     age:22,
//     "email id":"vaishnavi@123"
// };
// console.log(user);
// user.city="delhi";
// console.log(user);
// console.log(user.name);
// delete user.age;
// console.log(Object.keys(user));   //keys
// console.log(Object.values(user));  //values
// let keys=Object.keys(user)[0];
// console.log(keys)
// console.log(user["email id"]);
// console.log(user["name"]);
// delete user.name

// delete user["name"]
// console.log(user);

// let fname="pia";
// let user2={
//     fname:"jia",
// };
// console.log(user2);

// let fname="pia";
// let user2={
//     [fname]:"jia",
// };
// console.log(user2);
// console.log(user2.pia);
// console.log(user2[fname]);

// let arr=["riya","raj","trupti"];
// console.log(arr);

// arr[1]="sapna";
//  console.log(arr);
// console.log(arr.length)
// console.log(arr[arr.length-1]);
// arr.push("vaishnavi")  //adding last value
// console.log(arr)
// arr.pop()        //remove last value
// console.log(arr)
// arr.shift();     //remove first elemennt
// console.log(arr)
// arr.unshift("jia");  //add first value
// console.log(arr)




// let arr=[]
// arr[0]="raj";
// arr[22]="riya"
// arr[99]="dguy"
// console.log(arr.length)

// let arr=["riya","raj","punam","pia"]
// arr.length=4;
// console.log(arr)

// let arr=new Array("riya","raj","punam","pia")
// console.log(arr)

// let arr=new Array(5)
// console.log(arr[0])

// let arr=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// console.log(arr[0][1]);
// console.log(arr.toString());


// let arr=[1,2,3,4,5];
// console.log(String(arr)=="1,2,3,4,5");
// console.log([1,2] + [3,4])
// console.log([1,2,] + [3,4])
// console.log([1,2] + [,3,4])
// arr.splice(1,2)    //splice box
// arr.splice(1,2)    //splice removee 2 element
// arr.splice(1,1,"pia")
//console.log(arr)

// console.log(arr.length)

// let arr=[1,2,3,4,5];
// arr.splice(0,0,6,7,8)
// arr.splice(-2,0,6,7,8)
// console.log(arr)

// when we write
// console.log([1,2,])    // after comma 1,2 only print
// console.log([,,3,4])   // before comma empty value ,3,4 will print
// console.log([1,2]+3)
// console.log([1,2]+"3")
// console.log([]+3)
// console.log([1]+3)
// console.log([] == [])
// console.log("" == "")
// console.log(0=="")

// let arr=["riya","pia","sia","jia","tia","pia"]      //pending
// console.log(arr.slice(-2,4))
// console.log(arr.indexOf("pia"))
// console.log(arr.lastIndexOf("pia"))
// console.log(arr.reverse());
// let arr1=(arr.join(" , "))
// console.log(arr);
// console.log(typeof(arr));


// let arr=[1,2]
// console.log(arr.concat([3,4],5,6))


// let arr=[NaN];
// console.log(arr.indexOf(NaN));
// console.log(arr.includes(NaN))

// let arr=[
//     {name:"pia" , age:20},
//     {name:"jia", age:30},
//     {name:"sia", age:40},
//     {name:"tia", age:50},
//     {name:"uia", age:60},
// ];
// let  user=arr.find(element=>element.age==40);
// let  u/ser=arr.findIndex(element=>element.age==40);
// console.log(user);



// let str ="vaishnavi";
// console.log(str.split("").reverse().join(""));

// let arr=["riya","pia","sia","jia","tia","pia"];
// let str=[]
// for (let i=0; i<(arr.length); i++){
//     str=str+arr[i].split("").reverse().join("")+" "
    
// }
// console.log(str);


// let arr=[1,2,3,4,5,6];     //filter
// let user=arr.filter((element)=>element%2===0)
// console.log(user)

// let arr=[1,2,3,4,5,6];     //filter
// let user=arr.filter((element,index)=>index%2===0)
// console.log(user)


// let arr=[1,2,3,4,5];     //reduce
// let user=arr.reduce(function(accumulator,element,index){
// return accumulator + element +index;
// },0)
// console.log(user)


// let arr=[1,2,3,4,5,6];     //map
// let user=arr.map((element,index)=>element*index)
// console.log(user)

// let arr=[1,2,3,4];
// let result=arr.every((element)=>element>0)
// console.log(result)
// let user=arr.map((element)=>{
//     return element>0
// }
   
// )
// console.log(user)



// let arr=[1,2,3,4];
// let result=arr.some((element)=>element>3)
// console.log(result)

// for each print each element
// let arr=[1,2,3,4,5];
// arr.forEach((element)=>console.log(element));
// arr.forEach((element,index)=>console.log(element,index));

// let arr=[1,2,3,4,5];
// // arr.fill(0);
// arr.fill(0,1,3);
// arr.fill(0,1);
// arr.fill("a",1,4);
// console.log(arr)

// let arr=[1,2,3,4,5];
// console.log(Array.isArray(arr));

// let fruit="apple";
// let bag={};
// bag[fruit]=5;
// console.log(bag)


// let fruit="apple";
// let bag={
//     [fruit+"computer"]:5,
// }
// console.log(bag)



// function makeover(name,age){
//     return{
//         name:name,
//         age:age,
//     };
// }
// let user=makeover("alka",20);
// console.log(user)


// function makeover(name,age){
//     return{
//         name,
//         age,
//     };
// }
// let user=makeover("alka",20);
// console.log(user)

// function userDetails(name,age){
//     return{
//         name,
//         age:age ||20,
//     }
// }

// let user1={a:1,b:2};
// let  user2={c:3,d:4};
// let output=Object.assign(user1,user2);
// console.log(output);
// // console.log(user1)


// let user1={a:1,b:2};
// let  user2={c:3,d:4};
// let output=Object.assign({},user1,user2);
// console.log(output);
// console.log(user2)


// let user1={a:1,b:2};
// let  user2={b:3,d:4};
// let output=Object.assign(user2,user1);
// console.log(output);
// let output2=Object.assign({},user2,user1);
// console.log(output2);
// let output3=Object.assign(user2,user1);
// console.log(output3);

// function sayHii(){
//     return "hii";
// }
// console.log(typeof sayHii);
// console.log(typeof sayHii());


// const user={
//     name:"pia",
//     age:23,
//     "my game":"cricket",
// }
// console.log(user["my game"])

// let fname="viashnavi"
// let user2={
//     [fname]:"anjali",
// }
// console.log(user2.fname);
// console.log(user2[fname])


// You are given two arrays arr1 and arr2, concatenate arr1 and arr2, and return the resulting array.
// let arr=[1, 3]
// let arr1=[2, 5]
// for(let i=0; i<arr1.length; i++){
//     arr.push(arr1[i]);
// }
// console.log(arr)

// let arr3=arr.concat(arr1);


// Given an array, convert the given array to string.
// [2, 5, 10, 7, 5]
// '2,5,10,7,5'


// let user={
//     name:"puran",
//     locatton:"Bengal",
//     addition:function(a,b){
//         console.log(a+b);
//     },
//     substraction(a,b){
//         console.log(a-b);
//     },
//     multiplication(a,b){
//         console.log(a*b);
//     },
//     greet(){
//        console.log(this,"inside") 
//     }
// }
// user.greet()
// user.multiplication(2,3)
// // this method is used to acesses the keys



// let user={
//     "first name":"vaishnavi",
//     "last name":"paropate",
//     getFullName(){
//         console.log(this["first name"] +" "+ this["last name"])
//     }
// }
// user.getFullName();

// let obj={
//     name:"jia",
//     age:20
// }
// let a=Object.keys(obj)
// console.log(a.length)



