function calculateSumOfDigits(digit) {
    
    let sum = 0;
    while(digit >  0) {
        sum += digit % 10;
        digit = Math.floor(digit / 10);
    }
    return sum;
}

console.log(calculateSumOfDigits(1234));  


const sumDigits = num => Math.abs(num).toString().split('').reduce((sum, d) => sum + +d, 0);

console.log(sumDigits(1234239945));