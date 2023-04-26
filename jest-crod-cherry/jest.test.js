// 💻 Challenges
// Process: Write the test FIRST. Ensure the test fails correctly. Then write the code that will make the test pass.
// Note: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

describe("coffeeOrWork", () => {
    it("returns drink coffee or keep working based on input", () => {
        expect(coffeeOrWork("yes")).toEqual("drink coffee")
        expect(coffeeOrWork("no")).toEqual("keep working")
    })
})
//output:  FAIL  ./jest.test.js
//   ● Test suite failed to run

//   ReferenceError: coffeeOrWork is not defined

// Create the function that will make the test pass.
    //Psuedocode:
        //input: string "yes" or "no"
        //output: string "drink coffee" or "keep working"
        //process create a function named coffeeOrWork 
        //use a conditional if/else to determine our output
        //expected output is a string "drink coffee" or "keep working"

// const coffeeOrWork = (string) => {
//     let tired = string
//     return tired === "yes" ? "drink coffee" : "keep working"
// }

//Output  PASS  ./jest.test.js
//   coffeeOrWork
//   ✓ returns drink coffee or keep working based on input (1 ms)

//Refactor 

const coffeeOrWork = (string) => {
    return string === "yes" ? "drink coffee" : "keep working"
}



// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

describe("stressTest", () => {
    it("returns relax if stressed and keep going if not stressed", () => {
        expect(stressTest("yes")).toEqual("relax")
        expect(stressTest("no")).toEqual("keep going")
    })
})
//Red test ouput:
// FAIL  ./jest.test.js
// coffeeOrWork
//   ✓ returns drink coffee or keep working based on input (11 ms)
// stressTest
//   ✕ returns relax if stressed and keep going if not stressed (1 ms)

// ● stressTest › returns relax if stressed and keep going if not stressed

//   ReferenceError: stressTest is not defined

// Create the function that will make the test pass.

//psuedocode
//input: string of yes or no
//output: string of relax or keep going
//process: create a function that takes a yes/no parameter and conditionally returns relax or keep going

// const stressTest = (string) => {
//     let stressed = string
//     return stressed === "yes" ? "relax" : "keep going"
// }
// Greentest output:
// PASS  ./jest.test.js
// coffeeOrWork
//   ✓ returns drink coffee or keep working based on input (9 ms)
// stressTest
//   ✓ returns relax if stressed and keep going if not stressed (2 ms)

//Refactor:

const stressTest = (string) => {
    return string === "yes" ? "relax" : "keep going"
}

// Write the test for a function that returns "in budget" if a price is lower than $300.
// Create the function that will make the test pass.
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
// Create the function that will make the test pass.