// dry principle-don't repeat yourself

// factory function   - fuctionn that return an objject
// constructor function
// object created method=
// it creates a new object,using an axitinng object as the 


// map-return a new array,does not change the original array
// loop through the array a function to each element

function createStudent(name,age){
    return {
        name:name,
        age:age
    }
}
// let student1=createStudent("pia",18);
// let student2=createStudent("jia",19);
// let student3=createStudent("tia",20);
// console.log(student1);
// console.log(student2);
// console.log(student3);



// const student1={
//     name:"pia",
//     age:45,
//     printDeatails(){

//     }
// }
// const student2={
//     name:"jia",
//     age:55,
//     printDeatails(){
        
//     }
// }
// const student3={
//     name:"tia",
//     age:65,
//     printDeatails(){
        
//     }
// }


// const obj={
//     name:"pia",
//     age:32
// }
// const newObj=Object.entries(obj);
// for(let i=0;i<newObj.length;i++){

//     let key=newObj[i][0];
//     let value=newObj[i][1];
//     console.log(key,value)
// }

// pascal==first  letter always be capital

// function Student(name,age){
// // console.log(this);
// this.name=name
// this.age=age
// return this.name,this.age
// }
// let studentDetail=new Student("jia",18);
// console.log(studentDetail)

// new keyword- it creates a new empty object
// its attach the value oof this keyword to the new empty object
// its return the neewly created object it t=return  this keyword


// destructuring

// let student={
//     name:"jia",
//     age:21
// }
// let{name,age}=student
// console.log(student)


// let arr = [1,5];
// let sum = 0;
// for(let i=arr[0]; i<= arr[1]; i++)
// {
//     if(i  % 2 !=0)
//     {
//        sum = sum + i; 
//     }
// }
// console.log(sum);

// when a new objecct ,RRy ia creTED nd the referenece of the origiAL object


// const object1={
//     name:"jia",
//     age:20
// }
// const object2=_.cloneDeep(object1);
// console.log(object1)
// console.log(object2)


// factory function
// const student={
//     name:"jia",
//     job:"Developer"
// }
// const student2={
//     name:"tia",
//     job:"Developer"
// }
// const student3={
//     name:"pia",
//     job:"Developer"
// }

// function createStudent(firstname,profession){
//     return{
//         name:firstname,
//         job:profession
//     }
// }
// const bhagya=createStudent("pia","developer");
// const Avantika=createStudent("jia","developer");
// const Shweta=createStudent("sonu","developer");
// console.log(bhagya)
// console.log(Avantika)
// console.log(Shweta)

// cleartimme out= cancle settime out and dont give us ans
// function greet(){
//     console.log("notifiedd afterr five")
// }
// let line=setTimeout(greet,1000)
// clearTimeout(line)


// setInterval()= runn code inffinity as  per time
// function printhello(){
//     console.log("hello");
// }
// let id=setInterval(printhello,1000)
// clearInterval(id)

// let clock= document.getElementById("clock")