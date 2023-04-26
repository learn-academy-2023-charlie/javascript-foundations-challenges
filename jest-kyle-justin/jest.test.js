// 💻 Challenges



// Process: Write the test FIRST. Ensure the test fails correctly. Then write the code that will make the test pass.


// Note: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.



// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

// Test: 
// describe("areTired", () => {
// it ("returns 'drink coffee' if you are tired and 'keep working' if you are not tired." , () => {
// expect(areTired("yes")).toEqualTo("drink coffee")

// describe("arrTired" , () => {
//     it( "returns drink coffee or keep working based on input", () => {
//         expect(arrTired(true)).toEqual("drink coffee");
//         expect(arrTired(false)).toEqual("keep working");
//         });
// })


// Create the function that will make the test pass.

// const arrTired = (string) => {
//     if (string === true ) {
//         return "drink coffee"
//     } else if (string === false) {
//         return "keep working"
//     }
// }

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

// describe("youStressed", () => {
//     it( "returns relax or keep going based on input", () => {
//         expect(youStressed(true)).toEqual("relax");
//         expect(youStressed(false)).toEqual("keep going");
//         });
// })

// Create the function that will make the test pass.


// const youStressed = (string) => {
//     if (string === true){
//         return "relax"
//     } else if (string === false) {
//         return "keep going"
//     }
// }

// Write the test for a function that returns "in budget" if a price is lower than $300.

describe("youBroke", () => {
    it( "returns in budget based on input", () => {
        expect(youBroke(true)).toEqual("in budget");
        
        });
})

// Create the function that will make the test pass.
const youBroke = (string) => {
if (string === true){
    return "in budget"
} else if (string === false) {
    return "you a broke ass ho"
}
}


// Write the test for a function that takes in two numbers and returns the smaller number.
// 1. Write the test
describe("twoNums", () => {
    it("returns smaller number of the two", () => {
        expect(twoNums(num1, num2)).toEqual(10);
        });
})
// 2. See the test fail
// twoNums › returns smaller number of the two
// 3. Write the code
// Pseudocode
// input: two numbers
// output: the smaller number of the two
// function name: twoNums
// methods: if statement 
// compare both numbers 
// return: the smaller number

// Create the function that will make the test pass.
let num1 = 10
let num2 = 20
const twoNums = (num1, num2) => {
    if (num1 > num2){
        return num2
    } else if (num2 > num1) {
        return num1
    } 
    }

// 4. See the test pass
// 5. Refactor, if necessary

// Write the test for a function that takes in one numbers and returns whether the number is odd.
describe("oddNum", () => {
    it("returns smaller number of the two", () => {
        expect(oddNum(num3)).toEqual("This number is odd.");
        });
})
// Create the function that will make the test pass.
// Pseudocode:
// input: one number in a variable
// output: the string "This number is odd."
// function name: oddNum
// methods: conditional if statement and % arithmetic operator
// return: "This number is odd." if the number is odd
let num3 = 11
const oddNum = (num3) => {
    if(num3 % 2 !=0 ){
        return "This number is odd." 
    } else {"This number is not odd"}
}
// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
describe("fruitColor", () => {
    it("returns yellow if the argument is banana, red if apple, and purple if grape.", () => {
        expect(fruitColor("banana")).toEqual("yellow");
        expect(fruitColor("apple")).toEqual("red");
        expect(fruitColor("grape")).toEqual("purple");
        });
})
// Create the function that will make the test pass.
// Pseudocode:
// input: a string of a fruit
// output: the color of the fruit, either yellow, red, or purple
// function name: fruitColor
// methods: if statement conditional 
// return: "yellow" if banana, "red" if apple, "purple if grape"
let fruit = "apple"
const fruitColor = (fruit) => {
    if (fruit === "apple"){
        return "red"
    }else if (fruit === "banana"){
        return "yellow"
    }else if (fruit === "grape"){
        return "purple"
    }
}

// Write the test for a function called rick that returns "Morty".
// Create the function that will make the test pass.
// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// Create the function that will make the test pass.
// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// Create the function that will make the test pass.
// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Create the function that will make the test pass.
// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// Create the function that will make the test pass.
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Create the function that will make the test pass.
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".
// Create the function that will make the test pass