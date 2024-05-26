// a function using null.
// data types== string - number -bolean-null
function divide(a, b) {
    var answer = 0;
    answer = a / b;
    if (b === 0) {
        return null;
    }
    if (a === 0) {
        return null;
    }
    return answer;
}
var a = 78;
if (a != null) {
    console.log(a);
}
else {
    console.log("invalid operation");
    console.log("try again");
}
console.log(divide(10, 0)); //null
console.log(divide(0, 45)); //null
console.log(divide(9, 2)); //this will solve the sum.
// NaN = not a number.
// another exmple:
