// prompt -  write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

// pseudocode:

// input - string
// output - string
// process:
// function name -> areTired
// parameter called -> string
// compare the string to "yes"
// expected output: if true "drink coffee", if false "keep working"

describe("areTired", () => {
    it("returns drink coffee", () => {
        expect(areTired("yes")).toEqual("drink coffee")
        expect(areTired("no")).toEqual("keep working")
    })
})

// const areTired = (string) => {
//     if (string === "yes") {
//         return "drink coffee"
//     }
//     else {
//         return "keep working"
//     }
// }

// success : 
//  PASS  ./jest.test.js
//   areTired
//   ✓ returns drink coffee (6 ms)

// refactor using ternary operator

const areTired = (string) => {
    return string === "yes" ? "drink coffee" : "keep working"
}
// success : 
//  PASS  ./jest.test.js
//   areTired
//   ✓ returns drink coffee (6 ms)

// Write a test for function that returns "relax" if you are stressed and "keep going" if you are not stressed

// pseudocode:

// input - string
// output - string
// process:
// function name -> stressTest
// create a parameter called "string"
// compare the string to "yes"
// expected output: if true "relax", if false "keep going"

describe("stressTest", () => {
    it("informs student to relax if stresssed or keep going if not", () => {
        expect(stressTest("yes")).toEqual("relax")
        expect(stressTest("no")).toEqual("keep going")
    })
})

// Good failure
// FAIL  ./jest.test.js
// areTired
//   ✓ returns drink coffee (1 ms)
// stressTest
//   ✕ informs student to relax if stresssed or keep going if not

// const stressTest = (string) => {
//     if (string === "yes") {
//         return "relax"
//     }
//     else {
//         return "keep going"
//     }
// }

// PASS  ./jest.test.js
// areTired
//   ✓ returns drink coffee (1 ms)
// stressTest
//   ✓ informs student to relax if stresssed or keep going if not

// Refactored
const stressTest = (string) => {
    return string === "yes" ? "relax" : "keep going"
}
// success
// PASS  ./jest.test.js
// areTired
//   ✓ returns drink coffee (2 ms)
// stressTest
//   ✓ informs student to relax if stresssed or keep going if not (1 ms)


// prompt - write the test for a function that returns "in budget" if a price is lower than $300

// pseudocode:

// input - number
// output - string
// process:
// function name -> stressTest
// create a parameter called "string"
// compare the string to "yes"
// expected output: if true "relax", i