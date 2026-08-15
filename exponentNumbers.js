console.log(Math.pow(2, 3)); // Output: 8

function ExponentNumbers(base , power) {
   
    let result = 1;
    for( let i = 1; i<= power; i++) {
          result = result * base;
    }
    return result;
}


console.log(ExponentNumbers(2, 8)); 