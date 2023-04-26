// prompt -  write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

// pseudocode:

// input - string
// output - string
// process:
// function name -> areTired
// parameter called -> string
// compare the string to "yes"
// expected output: if true "drink coffee", if false "keep working"

// describe("areTired", () => {
//     it("returns drink coffee", () => {
//         expect(areTired("yes")).toEqual("drink coffee")
//         expect(areTired("no")).toEqual("keep working")
//     })
// })

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

// const areTired = (string) => {
//     return string === "yes" ? "drink coffee" : "keep working"
// }
// success : 
//  PASS  ./jest.test.js
//   areTired
//   ✓ returns drink coffee (6 ms)