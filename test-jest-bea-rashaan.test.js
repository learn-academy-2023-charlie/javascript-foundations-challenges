// Process: Write the test FIRST. Ensure the test fails correctly. Then write the code that will make the test pass.

const { log } = require("console")

// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
    describe("tired",() => {
        it("returns drink coffee or keep working based on input", () => {
            expect(tired("yes")).toEqual("drink coffee")
            expect(tired("no")).toEqual("keep working")
            })
        })
// Create the function that will make the test pass.
        const tired = (string) => {
            if (string === "yes") {
                return "drink coffee"
            } else {
                return ("keep working")
            }
        }
console.log(tired("no"));

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
describe("stress",() => {
    it("returns relax or keep going based on input", () => {
        expect(stress("yes")).toEqual("relax")
        expect(stress("no")).toEqual("keep going")
        })
    })
// Create the function that will make the test pass.
const stress = (string) => {
    if (string === "yes") {
        return "relax"
        } else {
            return ("keep going")
            }
            }
console.log(stress("no"));

// Write the test for a function that returns "in budget" if a price is lower than $300.
describe("price",() => {
    it("returns in budget or out of budget based on input", () => {
        const result = price(number)
        expect(price()).toBeLessThanOrEqual(number)
        expect(price()).toBeGreaterThan(number) })})

// Create the function that will make the test pass.
const price = () => {
    if (Math.random() <= 300) {
        return "in budget"
        } else {
            return ("you're too broke")
            }
            }
console.log(price(300));

// Write the test for a function that takes in two numbers and returns the smaller number.

// Create the function that will make the test pass.

// Write the test for a function that takes in one numbers and returns whether the number is odd.

// Create the function that will make the test pass.

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.

// Create the function that will make the test pass.

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