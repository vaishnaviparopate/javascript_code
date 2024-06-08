
const cloneDeep=require ('lodash/cloneDeep');

const obj={
    name:"john",
    age:30,
    location:{
        city:{
           city1: "New york",
           city2:"Los Angeles",
           city3:{
            city4:"Chicago",
            city5:"Houstan"
           }
        }

    },
    sayHii(){
        console.log("Hello I am john");
    }
}
const cloneObj=cloneDeep(obj);











