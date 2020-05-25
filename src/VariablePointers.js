console.log("HelloWorld");

let num = 12;
let string = "myString";
let boolean = true;

num2 = num;
num2 = 3;
console.log(num)
console.log(num2)

// let myArr = [1, 2, 3];
// let myArrCopy = myArr;
// myArrCopy.push(4);
// console.log(myArr);
// console.log(myArrCopy);

// let myObj = {
//     a: "A",
//     b: "B",
// };
// let myObjCopy = myObj;
// myObjCopy.c = "C";
// console.log(myObj)
// console.log(myObjCopy)


// Dereference Array
// let myArr = [1, 2, 3];
// let myArrCopy = myArr.map(num => num);
// // for (let i = 0; i < myArr.length; i++) {
// //     myArrCopy.push(myArr[i]);

// // }
// myArrCopy.push(4);
// console.log(myArr);
// console.log(myArrCopy);


// Dereference Object

// let myObj = {
//     a: "A",
//     b: "B",
// };
// let myObjCopy = {
//     a: myObj.a,
//     b: myObj.b
// };
// myObjCopy.c = "C";
// console.log(myObj);
// console.log(myObjCopy);


// Spread Syntax
let myArr = [1, 2, 3];
let myArr2 = [12, 13, 14];
let myArrCopy = [10, ...myArr, ...myArr2];
myArrCopy.push(4);
// console.log(myArr);
// console.log(myArrCopy);


let myObjCopy = {
    a: "A",
    b: "B",
    c: "C",
}
// console.log(myObj);
// console.log(myObjCopy);

const { a, ...whateverIWant } = myObjCopy;
console.log(a)
// console.log(c)
console.log(whateverIWant)
console.log(myObjCopy)


// const { readFileSync, writeFileSync } = require("fs"); // { readFileSync: fn, writeFileSync: fn, dirExists: fn .. more }


let myPeople = [
    {
        firstName: "Luke",
        lastName: "Parker",
        age: 23
    }, {
        firstName: "Rachel",
        lastName: "Nox",
        age: 28
    }, {
        firstName: "Douglas",
        lastName: "Adams",
        age: 42
    }
];
