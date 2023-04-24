// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
const arr1 = [3, 9, 15, 4, 10]
// // output: [30, 90, 150, 40, 100]
// Pseudocode: 
// Input: array of numbers
// output: array of numbers
// process: create a function called mult10 using .map() to iterate the multiplication accross the entire array

// const mult10 = (array) => {
//     return array.map((value) => value *10)
// }
// console.log(mult10(arr1))
// output: [30, 90, 150, 40, 100]

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const arr2 = [2, 7, 3, 5, 8, 10, 13]
// // output: [7, 3, 5, 13]

// pseudocode:
// input: an array
// output: a shorter array
// process: create a function called onlyOdd that uses the .filter() built-in method to discrimminate against even numbers

// const onlyOdd = (array) => {
//     return array.filter((value) => value %2)
// }
// console.log(onlyOdd(arr2))

// actual output: 7, 3, 5, 13]

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // output: "nicework"

// pseudocode:
// input: array
// output: a single string with only the letters from the array
// process: declare function called onlyLetts, and we use the .filter() built-in method because we want to exclude certain elements from the original array

const onlyLetts = (array) => {
let result = ""
    return array.filter((value) => typeof value === "string")
}
console.log(onlyLetts(comboArr))