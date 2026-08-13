function findEvenOdd(number) {
  try {
    if (number % 2 === 0) {
      console.log("The number is even");
    } else {
      console.log("The number is odd");
    }
    return number;
  } catch (error) {
    console.log(error.message);
  }
}

findEvenOdd(5);