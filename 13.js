
// function and Scope
// Write a function that calculate the factorial of a given number
let factorial= 1
let factorialOfNumber = (num)=>{
    for( i=num; i>0 ; i--){
    factorial*=i;
    }
    return factorial;

}
 let num = factorialOfNumber(5);

 console.log(factorial)