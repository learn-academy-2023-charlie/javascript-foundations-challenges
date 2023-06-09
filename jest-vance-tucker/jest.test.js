// // Jest Challenge

// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

describe ("coffee test", () => {
    it("Are you tired?", () => {
        expect(coffeeTest("yes")).toEqual("drink coffee")
        expect(coffeeTest("no")).toEqual("keep working")
    })
})

// Create the function that will make the test pass.
// Pseudo Code
    // Input: string 
    // Output: string that says drink coffee or keep working
    // Process: create a function named coffeeTest that uses conditional statements
    // If you are tired returns "drink coffee", if you are not tired returns "keep working"

const coffeeTest = (string) => {
   return string === "yes" ? "drink coffee" : "keep working"

    //     if(string === "yes") {
//         return "drink coffee"
//     }
//     else {
//         return "keep working"
//     }
}

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

describe ("moodChecker", () => {
    it("informs to relax or keep going", () => {
        expect(moodChecker("yes")).toEqual("relax")
        expect(moodChecker("no")).toEqual("keep going")
    })
})

// Create the function that will make the test pass.
    // Pseudo code:
    // Input: a string
    // Output: a string that says "relax", or "keep going"
    // Process: create a function named moodChecker that uses conditional statements
    // If stressed, returns "relax" and if not stressed, returns "keep going"

    const moodChecker = (string) => {
        return string === "yes" ? "relax" : "keep going"
    }


// Write the test for a function that returns "in budget" if a price is lower than $300.

describe ("budgetChecker", () => {
    it("informs if in budget", () => {
        expect(budgetChecker(299)).toEqual("in budget")
        expect(budgetChecker(300)).toEqual("not in budget")
    })
})

// Create the function that will make the test pass.
// Psuedo code
    // Input: a number
    // Output: a string saying in budget if under 300
    // Process: create a function named budgetChecker that uses conditional statements to determine if its under 300

    const budgetChecker = (result) => {
        return result < 300 ? "in budget" : "not in budget"
        
    }


// Write the test for a function that takes in two numbers and returns the smaller number.
describe("smallerNum", () => {
    it("returns smaller number", () => {
        expect(smallerNum()).toEqual()
    })
})

// Create the function that will make the test pass.
// Pseudo Code:
// Input: two separate numbers
// Output: the smaller of the two
// Process:
    // Create a function named smallerNum
    // Use conditionals if num1 is greater than num2, else return num2

    const smallerNum = (num1, num2) => {
        return num1 > num2 ? num2 : num1
    }

// Write the test for a function that takes in one numbers and returns whether the number is odd.
describe("oddChecker", () => {
    it("checks to see if number is odd", () => {
        expect(oddChecker(1)).toEqual("The number is odd")
        expect(oddChecker(0)).toEqual("The number is not odd")

    })
})

// Create the function that will make the test pass.
// Pseudo Code: 
// Input: takes in a number
// Output: retruns wether number is odd
// Process:
    // Create a function called oddChecker
    // use conditional to see if num % 2 = 1 to see if it is odd
    // return a statement saying yes it is odd or no it is not

    const oddChecker = (num) => {
        return num % 2 === 1 ? "The number is odd" : "The number is not odd"
    }

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
describe("fruitColors", () => {
    it("returns a different color for each fruit", () => {
        expect(fruitColors("banana")).toEqual("yellow")
        expect(fruitColors("apple")).toEqual("red")
        expect(fruitColors("grape")).toEqual("purple")
    })
})

// Create the function that will make the test pass.
// Pseudo Code:
// Input: a fruit as a string
// Output: a color as a string
// Process:
    // Create the function named fruitColors
    // Use ternary as our conditionals
    // Retrun each color with its respected fruit

    const fruitColors = (fruit) => {
        return fruit === "banana" ? "yellow" : fruit === "apple" ? "red" : "purple"
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
// Create the function that will make the test pass.