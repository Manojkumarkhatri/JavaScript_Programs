// Conditional
//Write afuntion that check if a number is even or odd and returns "Even " or "Odd" accordingly

function checkEvenOrOdd(num){
    if (num%2==0) {
        return "Even";
        
    } else {
        return "Odd";
    }
}

console.log(checkEvenOrOdd(23))