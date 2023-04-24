// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.
// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
// pseudocode:
// -input: array
// -output: return array with all numbers multiplied by 3
// -process: 
// create a function named `multiple3`
// create a function for loop 
// create a function with a new variable and use it to get the expected result
// log the code.
// const testArr1 = [3, 9, 15, 4, 10]
// const multiple3 = (array) => {
//     let answer = []
//     for (let i = 0; i < array.length; i++ ) {
//         answer.push(array[i] * 3)
//     }
//     return answer
// }
// console.log(multiple3(testArr1));

// output: [9, 27, 45, 12, 30]

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// pseudocode:
// -input: array
// -output:  return new array with only odd numbers
// -process:
// create a function named `oddNumbers`
// create an array named `newArrays` use for loop
// log the code.

// const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// const oddNumbers = (array) => {
//     let newArray = []
//     for (let i = 0; i < array.length; i++){
//         if (array[i] % 2 != 0){
//             newArray.push(array[i])
//         }
//     }
//     return newArray
// }
// console.log(oddNumbers(testArr2));
// output: [-7, 3, 5, 13]

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
// pseudocode:
// -input: array
// -output:  return a string with only letters
// -process:
// create a function named `onlyLetters`
// use the for loop in the function and use the typeOf method
// log the code

const comboArr = [
  7,
  "n",
  true,
  "i",
  "c",
  10,
  "e",
  -388,
  "w",
  3,
  "o",
  0,
  "r",
  false,
  "k"
]
// const onlyLetters = (array) => {
//     let arrayLetters = []
//     for (let i = 0; i < array.length; i++) {
//         arrayLetters.push(typeof array[i])
//     }
//     return arrayLetters
// }
// console.log(onlyLetters(comboArr));

const onlyLetters = (array) => {
    let arrayLetters = []
    for (let i = 0; i < array.length; i++) {
        if (`typeOf ${array[i]} === "String"`) {
            arrayLetters.push(array[i])
    } 
    }
    return arrayLetters;
}
console.log(onlyLetters(comboArr));

// // output: "nicework"
// Create a function that takes in an array of numbers and returns the sum.
// const addThese1 = [1, 2, 3, 4]
// // output: 10

// const addThese2 = []
// // output: 0
// Create a function that takes in an array of numbers and returns the index of the largest number.
// const indexHighestNumber = [1, 4, 2, 3]
// // output: 1