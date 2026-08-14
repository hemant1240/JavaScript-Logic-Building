function findLargestNumber(arr) {
    if (arr.length === 0) {
        return null; // Return null for empty array
    }

    let largest = arr[0];
    for(let i = 1; i<arr.length; i++) {
        if(arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}


console.log(findLargestNumber([1, 5, 3, 9, 2])); // Output: 9
console.log(findLargestNumber([-5, -2, -10, -1])); // Output: -1
console.log(findLargestNumber([0])); // Output: 0
console.log(findLargestNumber([])); // Output: null

const mathMax = (arr) => {
    return Math.max(...arr);
};

const mathMin = (arr) => {
    return Math.min(...arr);
};


console.log(mathMax([1, 5, 3, 9, 2])); // Output: 9
console.log(mathMin([-5, -2, -10, -1])); // Output: -10