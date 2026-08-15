function findAverage(arr) {
    if(!Array.isArray(arr)) {
        return "Please provide a valid array input.";
    }
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return Math.floor(sum / arr.length);
}

console.log(findAverage([2,5,7,1,67,87]));