const { expect } = require("chai");
const { addNumbers } = require("../src/Common/Numbers");

describe("testing the numbers module", () => {
    describe("testing the addNumbers function", () => {
        it("should return the sum of two numbers", () => {
            expect(addNumbers(12, 14)).to.eql(26);
        });
        it("should handle decimal numbers", () => {
            expect(addNumbers(12.14, 14)).to.eql(26.14);
        });
        it("should handle negative numbers", () => {
            expect(addNumbers(-12, 14)).to.eql(2);
        });
        it("should throw an error if either parameter is not a number", () => {
            expect(() => addNumbers("A", "B")).to.throw();
            expect(() => addNumbers(1, "B")).to.throw();
            expect(() => addNumbers("A", 2)).to.throw();
        });
        it("should work for strings if they can be parsed as numbers", () => {
            expect(addNumbers("12", 14)).to.eql(26);
            expect(addNumbers("12.14", 14)).to.eql(26.14);
            expect(addNumbers("-12", 14)).to.eql(2);
        });
        it("should throw an error when no numbers are passed in", () => {
            expect(() => addNumbers()).to.throw();
        });
        it("should throw an error when one number is passed in", () => {
            expect(() => addNumbers(1)).to.throw();
        });
    });
});