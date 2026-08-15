function simpleIntrest(principal, rate, time) {
    let si  = (principal * rate * time) / 100;
    return si;
}

console.log(simpleIntrest(1000, 5, 2)); // Output: 100