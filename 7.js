// conditional
// Create a program that checks if a given year is a leap year
let leapYear=(year)=>{
    if ((year % 4 ===0 && year % 100 !== 0) ||(year%400 === 0)) {
        return "Leap Year";
    } 
    else {
        return "Not a Leap Year";
    }
}

console.log(leapYear(2000))