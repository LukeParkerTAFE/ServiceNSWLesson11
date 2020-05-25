function addNumbers(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        throw new Error("num1 and num2 must both be numbers");
    }
    return parseFloat(num1) + parseFloat(num2);
}

module.exports = {
    addNumbers
}