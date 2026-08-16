function getPrimesInRange(start, end) {
    const primes = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) primes.push(i);
    }
    return primes;
}

console.log(getPrimesInRange(1, 20)); 
