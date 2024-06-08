// 1 . Given a sentence, capitalize the first character of each word.
// 	input - this is javascript
// 	output - This Is JavaScript

// let s="this is javascript"
// let s1=s[0].toUpperCase()
// let s2="";
// for (let i=1; i<s.length; i++){
//     if (s[i-1]==" "){
//         s2=s2+s[i].toUpperCase()
//     }
//    else{
//     s2=s2+s[i]
//    }
   
// }
// console.log(s1+s2)



// 2. Given an array of string. Return a new boolean array. If the item at each index contains the word javascript in it. It should be true else it should be false.
// 	input - ["javascript", "react", "node"]
// 	output - [true, false, false]
	
// 	input - ["java","python","c"]
// 	output - [false, false, false]

// let arr= ["javascript", "react", "node"]
// let arr1=[]
// for(let i=0; i<arr.length; i++){
//     if (arr[i].includes("javascript")){
//        arr1.push("true")
//     }
//     else{
//         arr1.push("false")
//     }
// }
// console.log(arr1)


// 3. Given a string which contains an email address, return true if the given email is valid, else return false.
// 	input - puran@navgurukul.org
// 	output - true
	
// 	input - puran@navgurukul
// 	output - false
	
// 	input - puran@gmail.com
// 	output - true

// let s="puran@navgurukul.org"
// if(s.endsWith(".org") || s.endsWith(".com")){
//     console.log("true")
// }
// else{
//     console.log("false")
// }




// 4. Given two strings, check if they are anagrams or not. If they are anagrams return true else return false.
// 	input - below, elbow
// 	output - true

// 	input - night, thing
// 	output - true

// let s="below"
// let s2="elbow"
// function checkIn(){
//     for(let i=0; i<s.length; i++){
//         if (s[i]==s2){
//             return true
//         }
//     }
// }



// 5. Reverse the given sentence.
// 	input- i am learning javascript.
// 	output - tpircsavaj gninrael ma i

// let s="i am learning javascript"
// let s1=s.split("").reverse().join("")
// console.log(s1)


// 6. Reveres the given string word by word then return the reversed string.
// 	input - Success comes to those who work hard
// 	output - hard work who those to comes Success

// let s="Success comes to those who work hard"
// function reverseString(s){
//     return s.split(" ").reverse().join(" ")
    
// }
// console.log(reverseString(s));



