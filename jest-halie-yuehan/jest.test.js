// 💻 Challenges
// Process: Write the test FIRST. Ensure the test fails correctly. Then write the code that will make the test pass.

// Note: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.


// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// Create the function that will make the test pass.

// describe("doYouNeedCoffee",() => {
//     it("returns 'drink coffee' if you are tired and 'keep working' if you are not tired.",() => {
//         expect(doYouNeedCoffee("tired")).toEqual ("drink coffee")
//         expect(doYouNeedCoffee("not tired")).toEqual ("keep working")
//     })
// })

//pseudocode:
//Function Name: doYouNeedCoffee
//input: the strings "tired" or "not tired"
//output: 
// the string "drink coffee" if the input is the string "tired"
// the string "keep working" if the input is the sting "not tired"
//process: create a function that takes in a string (either "tired" or " not tired") and returns a string of "drink coffee" or "keep working". Use a conditional operator. (if / else if / else)



// const doYouNeedCoffee = (strings) => {
//     if (strings === "tired") {
//         return "drink coffee"
//     }
//     else if (strings === "not tired") {
//         return "keep working"
//     }

// }
// // PASS  ./jest.test.js
// doYouNeedCoffee
// ✓ returns 'drink coffee' if you are tired and 'keep working' if you are not tired. (3 ms)



// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// Create the function that will make the test pass.


// describe("areYouStressed",() => {
//         it("returns 'relax' if you are stressed and 'keep going' if you are not stressed.",() => {
//             expect(areYouStressed("yes")).toEqual ("relax")
//             expect(areYouStressed("no")).toEqual ("keep going")
//         })
//     })

    //pseudocode:
//Function Name: areYouStressed
//input: the strings "yes" or "no"
//output: a string - either "relax" or "keeping going"
// the string "relax" if the input is the string "yes"
// the string "keep going" if the input is the sting "no"
//process: create a function that takes in a string (either "yes" or " no") and returns a string of "relax" or "keep going". Use a conditional operator. (if / else if / else)


//     const areYouStressed = (strings) => {
//             if (strings === "yes") {
//                 return "relax"
//             }
//             else if (strings === "no") {
//                 return "keep going"
//             }
        
//         }
// test result:
//         PASS  ./jest.test.js
//         areYouStressed
//           ✓ returns 'relax' if you are stressed and 'keep going' if you are not stressed. (4 ms)
      

// Write the test for a function that returns "in budget" if a price is lower than $300.

// describe("inBudget",() => {
//     it("returns 'in budget' if if a price is lower than $300.",() => {
//         expect(inBudget(100)).toEqual ("in budget")
//         expect(inBudget(300)).toEqual ("not in budget")
//     })
// })

// Create the function that will make the test pass.
//pseudocode:
//Function Name: inBudget
//input: (num < 300) or (num >= 300)
//output: return "in budget" if the input is less than 300, 
//return "not in budget" if the input is >= 300
//process: create a function that takes in a num (either (num < 300) or (num >= 300) and returns a string of "in budget" or "not in budget". Use a conditional operator. (if / else if / else)



// const inBudget = (num) => {
    
// if (num < 300){
//     return "in budget"
// } else {
//     return "not in budget"
// }
// }

// PASS  ./jest.test.js
// inBudget
//   ✓ returns 'in budget' if if a price is lower than $300. (6 ms)


// Write the test for a function that takes in two numbers and returns the smaller number.

describe("smallestNum",() => {
    it("returns the smaller number.",() => {
        expect(smallestNum(12, 9)).toEqual (9)
    })
})

//pseudocode:
//Function Name: smallestNum
//input: num1, num2
//output: return a smaller number 
//process: create a function that takes in 2 num and return a num that's smaller.
//  Use condtional statement. to get desire result

const smallestNum = (num1, num2) => {
    if (num1 < num2){
        return num1
    } else if (num2 < num1){
        return num2
    }
}

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