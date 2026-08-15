function findFactors(num) {
    if(typeof num !== "number" || num <= 0 || !Number.isInteger(num)) {
        return "Please provide a valid positive integer input.";
    }

    const factors = [];
    for(let i = 1; i <= num; i++) {
        if(num % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

console.log(findFactors(12));