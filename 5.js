// String Manipulation 

// write a function that takes a string and return the reversed version of it.

let str= "Hello World";

function reverseString(str){
    return str.split("").reverse().join("");
}
console.log(reverseString(str))