
const generateMultiplicationTable = n => {
     for(let i = 1; i <= 10; i++) {
        console.log(` Table of  ${n}  x ${i} = ${n * i}`);
    }
}

console.log(generateMultiplicationTable(2));