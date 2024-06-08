// seal() :- update but not add another property
// but we can't delete the property

// const obj={
//     name:"vaishnavi",
//     age:18
// }
// Object.seal(obj);
// obj.name="jia";
// obj.adress="pune";
// delete obj.age
// console.log(obj)

// object
// let obj={
//     name:"jia",
//     age:20
// }
// obj.class=3
// console.log(obj.name);
// console.log(obj["name"]);
// console.log(obj)
// let s=(Object.keys(obj)[0])
// console.log(s)
// console.log(Object.values(obj))
// delete obj["age"]
// delete obj.age
// console.log(obj)


// let fname="jia"
// let obj={
//     [fname]:"tia"
// };
// console.log(obj);
// console.log(obj.jia);    //tia
// console.log(obj.fname);  //undefined
// console.log(obj[fname]);  //tia


// let arr=["tia","jia","pia"]
// console.log(arr.length)
// arr[1]="sia"
// arr[5]="jia"   //[ 'tia', 'sia', 'pia', <2 empty items>, 'jia' ]
// console.log(arr)



// let  arr="vaishnavi"
// let arr="112345"
// let s=parseInt(arr[arr.length-1])
// let s1=parseInt(arr[1])
// let sum=s+s1
// console.log(sum)



// let arr=["tia","jia","pia","sia"]
// arr.length=3
// console.log(arr)

// how to cnvert elemnet into array
// let a=("tia","jia","pia","sia")
// let arr=new Array("tia","jia","pia","sia")
// let arr=Array.isArray(("tia","jia","pia","sia"))
// console.log(arr)

// let arr=(1,2,3,4,5)
// let arr1=new Array(1,2,3,4,5)
// console.log(arr1)


// let arr=[1,2,3,4,5];
// console.log(String(arr)=="1,2,3,4,5");

// splice  :- start deleting from zero and delete 1 and staring adding from index 0(frist la jo numberr add karru to tychya pasun add hoel)
// let arr=[1,2,3,4,5]
// arr.splice(1,2,6,7,8)  
// console.log(arr)
// let arr1
// console.log(arr1)


// let obj={
//     name:"jia",
//     age:20
// }
// console.log("jia" in obj)
// console.log(obj.hasOwnProperty("age"))
// let obj1=Object.freeze(obj)
// obj.name="sia"
// console.log(obj1)


// short hand method
// let  obj={
//     name:"sia",
//     sayHii:function(firstname){
//         return  `Hello ${firstname}` },
//     sayBye(user1){
//             return `Good night ${user1}`
//         }
// }
// console.log(obj.sayHii("good morning"))
// console.log(obj.sayBye("jia"))
