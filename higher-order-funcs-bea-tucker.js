// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.

// Pseudo code:
// input: an array of numbers
// output: a new array of numbers multiplied by 10
// create a function called arrayMult
// use a higher order function to multiply values by 10
// return the new array

const arr1 = [3, 9, 15, 4, 10]
const arrayMult = (array) => {
    return array.map( num => num * 10)
    }
    // console.log(arrayMult(arr1));
// // output: [30, 90, 150, 40, 100]



// Write a function that takes in an array of numbers and returns a new array with only odd numbers.

// Pseudo code:
// input: an array of numbers
// output: a new array of numbers with only odd numbers
// create a function called arrayOdd
// use a higher order function to iterate and filter out all even numbers
// return the new array

const arr2 = [2, 7, 3, 5, 8, 10, 13]
const arrayOdd = (array) => {
    return array.filter( num => num % 2 === 1)
} 
// console.log(arrayOdd(arr2));
// // output: [7, 3, 5, 13]



// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// Pseudo Code: 
// Input: the array
// Output: a string with only the letters
// Use higher order function

const comboStr = (array) => {
    return array.filter(x => typeof x === "string")
}
// console.log((comboStr(comboArr).join("")))
// // output: "nicework"



// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
const filterArrayValues = [58, "", "abcd", true, null, false, 0]

// Pseudo code:
// Input: takes in an array
// Output: an array without any false, null, 0, or blank values
// use a high order function to filter
// return an array with only 58, "abcd", and true

const filterArray = (array) => {
    return array.filter(i => i !== null && i !== false && i !== 0 && i !== "")
}
// console.log(filterArray(filterArrayValues))
// // output: [58, "abcd", true]



// 🏔 Stretch Goals
// // Create a function that takes in a string and returns a new string with all the vowels removed.
// const str = "javascript is awesome"
// // Pseudo Code:
// // Input = the string
// // Output = the string without vowels
// // Use a function
// // use replace as a higher order function to remove vowels and replace with a new empty string
// // return the string without a vowels

// const noVowels = (str) => {
//     return str.replace(/[aeiou]/g,"")
// }
// console.log(noVowels(str))
// // output: "jvscrpt s wsm"



// Create a function that takes in two arrays as arguments returns one array with no duplicate values.

// pseudo code:
// Input: takes in two arrays 
// Output: one array with no duplicate values
// use a high order function to remove duplicate values
// return an array with no duplicate values

const arr1 = [3, 7, 10, 5, 4, 3]
const arr2 = [7, 8, 2, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]

const noDupes = (array,array2) => {
    ar
}