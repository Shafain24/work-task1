const add=(a,b)=>{
    return a+b;
}
const subtract=(a,b)=>{
    return a-b;
}
const multiply=(a,b)=>{
    return a*b;
}
const divide = (a, b) => {
    if (b === 0) {
        console.log("Cannot divide by zero");
    }
    return a / b;
};

const calculate = (operation, a, b) => {
    const func = operation.toLowerCase();
    switch (func) {
        case "add":
            return add(a, b);
        case "subtract":
            return subtract(a, b);
        case "multiply":
            return multiply(a, b);
        case "divide":
            return divide(a, b);
        default:
            console.log("Please provide the right operation!");
            return null;
    }
};
//module.exports={
//   add,
//    subtract,
//    multiply,
//    divide,
//    calculate
//}
export default {
  add,
  subtract,
  multiply,
  divide,
  calculate
};
