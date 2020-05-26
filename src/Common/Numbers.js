function addNumbers(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        throw new Error("num1 and num2 must both be numbers");
    }
    return parseFloat(num1) + parseFloat(num2);
}

function multiplyNumbers(num1, num2) {
    if(!num2 && num2 != 0) {
        throw new Error("num2 must be defined");
    }
    if(isNaN(num1) || isNaN(num2)){
        throw new Error("num1 and num2 must both be number");
    }
    return num1 * num2;
}

module.exports = {
    addNumbers,
    multiplyNumbers
}