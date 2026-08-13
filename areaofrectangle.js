function calculateArea(length, width) {

    if(length <= 0 || width <= 0) {
        throw new Error("Please enter positive values for length and width.");
    }
    let area = length * width;
    console.log(`The area of rectangle with length ${length} and width ${width} is ${area}.`);
}

calculateArea(5, 10);
try {
    calculateArea(-5, -10);
} catch (error) {
    console.error(error.message);
}
