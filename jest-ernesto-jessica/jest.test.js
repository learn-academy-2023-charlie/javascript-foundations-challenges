// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

// Pseudocode:
// Write the test
// See the test fail
// write the code
// see the test pass
// refactor

// describe(drinkCoffee, () => {
//     it("drink coffee" || "keep working", () => {
//         expect(drinkCoffee()).toEqual("drink coffee" || "keep working")
//     })
// })
// FAIL: FAIL  ./jest.test.js
//   ● Test suite failed to run

//   ReferenceError: drinkCoffee is not defined
//      8 | // refactor
//      9 |
//   > 10 | describe(drinkCoffee, () => {
//        |          ^
//     11 |     it("drink coffee" || "keep working", () => {
//     12 |         expect(drinkCoffee()).toEqual("drink coffee" || "keep working")
//     13 |     })

//     at Object.drinkCoffee (jest.test.js:10:10)

// Create the function that will make the test pass.
const drinkCoffee = (areYouTired) => {
    return areYouTired === "yes" ? "drink coffee" : "keep working"
}
describe(drinkCoffee, () => {
    it("return whether or not to drink coffee", () => {
        expect(drinkCoffee("yes")).toEqual("drink coffee")
        expect(drinkCoffee("no")).toEqual("keep working")
    })
})
// Pass:  PASS  ./jest.test.js
//   drinkCoffee
//   ✓ drink coffee (1 ms)




// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

// describe(areYouStressed, () => {
//     it("relax" || "keep going", () => {
//         expect(areYouStressed()).toEqual("relax" || "keep going")
//     })
// })
// FAIL: 
// FAIL  ./jest.test.js
//   ● Test suite failed to run
//   ReferenceError: areYouStressed is not defined

// Create the function that will make the test pass.

// const areYouStressed = () => {
//     if ("stressed") {
//         return "relax"
//     } else {
//         return "keep going"
//     }
// }

const areYouStressed = (stressed) => {
    return stressed === "yes" ? "relax" : "keep going"
}
describe(areYouStressed, () => {
    it("returns whether or not to relax", () => {
        expect(areYouStressed("yes")).toEqual("relax")
        expect(areYouStressed("no")).toEqual("keep going")  
    })
})
// // PASS  ./jest.test.js
//   drinkCoffee
//   ✓ drink coffee (1 ms)
// areYouStressed
//   ✓ relax (1 ms)


// Write the test for a function that returns "in budget" if a price is lower than $300.

// describe("isItInBudget", () => {
//     it("returns whether or not we can afford something", () => {
//         expect(isItInBudget("yes")).toEqual("This is in budget")
//         expect(isItInBudget("no")).toEqual("this is too expensive")
//     })
// })
//Fail:
    // FAIL  ./jest.test.js
    // drinkCoffee
    //   ✓ return whether or not to drink coffee (6 ms)
    // areYouStressed
    //   ✓ returns whether or not to relax
    // isItInBudget
    //   ✕ returns whether or not we can afford something (3 ms)

    // ● isItInBudget › returns whether or not we can afford something

    //   ReferenceError: isItInBudget is not defined


// Create the function that will make the test pass.

const isItInBudget = (expensive) => {
    if (expensive < 300) {
        return "This is in budget"
    } else {
        return "This is too expensive"
    }
}
describe("isItInBudget", () => {
    it("returns whether or not we can afford something", () => {
        expect(isItInBudget(true)).toEqual("This is in budget")
        expect(isItInBudget(false)).toEqual("This is too expensive")
    })
})

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
