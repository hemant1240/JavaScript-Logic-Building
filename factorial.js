function findFactorial(num){

    if(num < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    let fact = 1;
    for(let i = 1; i<= num; i++) {
        fact *= i;
        
    }
return fact;
}


//Find a function in recursion function 

function findFactorialRecursion(num) {
    if(num < 0) {
        throw new Error("Factorial is not defined for a negative number");
    }
    if(num === 0 || num === 1) {
        return 1;
    }
    return num * findFactorialRecursion(num - 1);
}
//for a simple function to find factorial of a number 

console.log(findFactorial(5));

//for a simple function to find factorial of a number using recursion
console.log(findFactorialRecursion(5));
