const { expect } = require("chai");
const { addNumbers } = require("../src/Common/Numbers");

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
});