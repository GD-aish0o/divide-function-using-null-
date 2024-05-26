// a function using null.


// data types== string - number -bolean-null
function divide(a:number , b: number) {
    let  answer =0;
    
    answer = a/b;
    if (b===0) {
        return null;
    }

    if (a===0) {
        return null;
    }
    return answer
}

console.log(divide(10,0)); //null

console.log(divide(0,45)); //null

console.log(divide(9,2)); //this will solve the sum.

// NaN = not a number.

let a = divide(9,2)

if (a!= null) {
    console.log(a);
        
} else {
console.log("invalid operation");
console.log("try again");

}


