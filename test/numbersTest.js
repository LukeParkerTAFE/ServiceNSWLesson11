const { expect } = require("chai");
const { addNumbers, multiplyNumbers } = require("../src/Common/Numbers");

describe("testing the numbers module", () => {
    describe("testing the addNumbers function", () => {
        it("should return the sum of two numbers", () => {
            let result = addNumbers(12, 14);
            expect(result).to.eql(26);
        });
        it("should handle decimal numbers", () => {
            let result = addNumbers(12.14, 14);
            expect(result).to.eql(26.14);
        });
        it("should handle negative numbers", () => {
            let result = addNumbers(-12, 14);
            expect(result).to.eql(2);
        });
        it("should throw an error if either parameter is not a number", () => {
            let test1 = () => addNumbers("A", "B");
            let test2 = () => addNumbers(1, "B");
            let test3 = () => addNumbers("A", 2);
            expect(test1).to.throw();
            expect(test2).to.throw();
            expect(test3).to.throw();
        });
        it("should work for strings if they can be parsed as numbers", () => {
            let result1 = addNumbers("12", 14);
            let result2 = addNumbers("12.14", 14);
            let result3 = addNumbers("-12", 14);
            expect(result1).to.eql(26);
            expect(result2).to.eql(26.14);
            expect(result3).to.eql(2);
        });
        it("should throw an error when no numbers are passed in", () => {
            let test = () => addNumbers();
            expect(test).to.throw();
        });
        it("should throw an error when one number is passed in", () => {
            let test = () => addNumbers(1)
            expect(test).to.throw();
        });
    });
    describe("testing the multiplyNumbers function", () => {
        it("should return the product of the two numbers passed in", () => {
            expect(multiplyNumbers(4, 6)).to.eql(24);
        });
        it("should handle decimal numbers", () => {
            expect(multiplyNumbers(4.5, 3)).to.eql(13.5);
        });
        it("should handle negative numbers where a negative times a positive is a negative", () => {
            expect(multiplyNumbers(-4, 6)).to.eql(-24);
            expect(multiplyNumbers(4, -6)).to.eql(-24);
        });
        it("should handle negative numbers where a negative times a negative is a positive", () => {
            expect(multiplyNumbers(-4, -6)).to.eql(24);
        });
        it("should return zero if one or both of the numbers is zero", () => {
            expect(multiplyNumbers(0, 4)).to.eql(0);
            expect(multiplyNumbers(4, 0)).to.eql(0);
            expect(multiplyNumbers(0, 0)).to.eql(0);
        });
        it("should throw an error when any of the values passed in is not a number", () => {
            let test1 = () => multiplyNumbers("A", 4);
            let test2 = () => multiplyNumbers(6, "B");
            let test3 = () => multiplyNumbers("A", "B");
            expect(test1).to.throw();
            expect(test2).to.throw();
            expect(test3).to.throw();
        });
        it("should parse any numbers from strings", () => {
            expect(multiplyNumbers("4", "6")).to.eql(24);
            expect(multiplyNumbers("4.5", 3)).to.eql(13.5);
            expect(multiplyNumbers("-4.5", 3)).to.eql(-13.5);
        });
        it("should throw an error when only 1 value is passed in", () => {
            let test1 = () => multiplyNumbers(4);
            let test2 = () => multiplyNumbers(-6);
            let test3 = () => multiplyNumbers(1.5);
            expect(test1).to.throw();
            expect(test2).to.throw();
            expect(test3).to.throw();
        });
        it("should throw when no values are passed in", () => {
            let test = () => multiplyNumbers();
            expect(test).to.throw();
        });
    });
});
