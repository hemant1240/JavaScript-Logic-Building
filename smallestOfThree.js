function smallestOfThree(a, b, c) {
    if(a<b && a<c) {
        return a;
    } else if(b<a && b<c) {
        return b;
    } else if(c<a && c<b) {
        return c;
    }
}

smallestOfThree(5, 3, 8); // returns 3

console.log(smallestOfThree(5, 3, 8)); // Output: 3