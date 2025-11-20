const isEven = (num) => {
    return num % 2 === 0;
};

const isOdd = (num) => {
    return num % 2 !== 0;
};

const square = (num) => {
    return num * num;
};

const cube = (num) => {
    return num * num * num;
};

//module.exports = {isEven,isOdd,square,cube};
export default{isEven,isOdd,square,cube}