//const calculator=require("./calculator");
//const maths=require("./mathUtils")
import calculator from './calculator.js';

import  maths from './mathUtils.js';

// Example usage:
calculator.add(2, 3);
maths.isEven(4);


console.log("Using mathUtils:");
console.log("even", maths.isEven(4));   
console.log("Odd:", maths.isOdd(7));     
console.log("Square:", maths.square(5));   
console.log("Cube:", maths.cube(3));       


console.log("\nUsing calculator:");
console.log("Add::", calculator.add(10, 5));          
console.log("Multiply:", calculator.multiply(4, 6));  
console.log("Divide: ",calculator.divide(5,0))