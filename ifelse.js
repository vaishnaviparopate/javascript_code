// let day=2;
// if(day==1){
//     console.log("monday");
// }
//  else if(day==2){
//     console.log("tuesday");
// }
// else if(day==3){
//     console.log("wednesday");
// }
// else if(day==4){
//     console.log("thursday");
// }
// else if(day==5){
//     console.log("friday");
// }
// else if(day==6){
//     console.log("saturday");
// }
// else if(day==7){
//     console.log("sunday");
// }

// console.log("Priya">"Priyanka");
// console.log("2">1);
// console.log("20">2);

// let numm=1e7;
// console.log(numm)

// let num=56_00_000_000
// let num=5.6e10
// console.log(num)

// let num1=2e-2 //2*10-2
// console.log(num1)

// if(1e-2===1/100){
//     console.log(true)
// }

// console.log(Math.floor(6.9))
// console.log(Math.ceil(6.0))
// console.log(Math.round(6.6))

// let num=3.14159265359;
// let a=num*100;
// console.log(a);
// let b=Math.round(a);
// console.log(b);
// console.log(b/100);

// let num=3.141;
// let a=num*100;
// console.log(a)
// console.log(Math.round(a)/10);


// let num=3.1457665;
// console.log(num.toFixed(6));

// let num=3.5;
// console.log(num.toFixed(0));


// console.log(0.1 ===0.1)
// console.log(0.1.toFixed(1))
// let a=0.1+0.2;
// console.log(a.toFixed(1)) //fixed 
// console.log(999999999999999);
// console.log(isFinite(10));  //finite
// console.log(Math.round(-3.5)); //round


// let random=Math.random(); //random
// console.log(parseInt(random*10));

// console.log(Math.max(5,6,4,8))  //max
// console.log(Math.min(5,6,4,8)) //min
// console.log(Math.pow(2,4))  //pow
// console.log(Math.pow(3,0.5))
// console.log(Math.pow(3,-2))
// console.log(Math.pow(2,-2))
// console.log(Math.sqrt(3)) //squareroot

// let str="vaishnavi";  //length
// let strlength=(str.length)
// console.log(str[strlength-1]);  //chracter  printing
// console.log(str.at(-2));
// let first=(str[0].toUpperCase());
// let second=(str.slice(1).toLowerCase());
// console.log(first+second)  //first char capital

// console.log(str.indexOf("i"));
// console.log(str.lastIndexOf("i"));
// console.log(str.indexOf("i",4));

// let str="this is  my page"
// console.log(str.indexOf("page"));
// console.log(str[1])
// console.log(str.includes("This")); //includes
// console.log(str.includes("this"));
// console.log(str.startsWith("T"));  //starstWith
// console.log(str.endsWith("T"));
// console.log(str.endsWith("ge"));
// console.log(str.slice(0,3));  //slice
// console.log(str.substring(4,0));  //substring
// console.log(str.substr(0,5));  //substr
// console.log(str.substr(-6,4));

// let str1="hello";
// let str2="vaishnavi";
// console.log(str1.concat(" ",str2));  //concat

// let str="    hello vaishnavi how aare you    ";   //trim
// console.log(str.trim());
// console.log(str.trimStart());      //trimmStart
// console.log(str.trimEnd());        //trimEnd

let str="5";
console.log(str.padStart(4,"0"));   //padStart
console.log(str.padStart(4,"1"));
// console.log(str.padStart(4,"a"));
// console.log(str.padStart(4,"i"));
console.log(str.padEnd(4,"0"));     //padEnd
console.log(str.repeat(4));   //repeat

// let a="hello world"
// console.log(a.replace("world" , "universe"));