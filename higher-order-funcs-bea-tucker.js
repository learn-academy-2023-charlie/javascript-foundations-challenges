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
    console.log(arrayMult(arr1));
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
console.log(arrayOdd(arr2));
// // output: [7, 3, 5, 13]



// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
// const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // output: "nicework"



// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
// const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// // output: [58, "abcd", true]




// 🏔 Stretch Goals
// Create a function that takes in a string and returns a new string with all the vowels removed.
// const str = "javascript is awesome"
// // output: "jvscrpt s wsm"
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// const arr1 = [3, 7, 10, 5, 4, 3]
// const arr2 = [7, 8, 2, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]