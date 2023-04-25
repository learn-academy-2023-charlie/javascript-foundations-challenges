// Create a function that takes in an array of numbers and returns an array with all numbers multiplied by 10.
// const arr1 = [3, 9, 15, 4, 10]
// // output: [30, 90, 150, 40, 100]

// Pseudo code 
// input: array of numbers
// output: array with all numbers multiplied by 10
// Process
// create a function named mult10
// use the function to iterate through the array multiplying each number by 10
// using .map to keep the same number of values in an array
// output: new array with mult of 10 from the original array
// expected output: [30, 90, 150, 40, 100]

// const mult10 = arr1.map(value => value * 10)
// console.log(mult10);

// If you CaReD about your code, make it Complex, Reusable and Dynamic
// const mult10 = (array) => {
//     return array.map(value => value * 10)
// }
// console.log(mult10(arr1))


// Create a function that takes in an array of numbers and returns an array with all numbers divided by two.
// const arr1 = [3, 9, 15, 4, 10]
// // output: [1.5, 4.5, 7.5, 2, 5]

// Pseudo code 
// input: array of numbers
// output: array with all numbers divided by 2
// Process
// create a function named div2
// use the function to iterate through the array dividing each number by 2
// using .map to keep the same number of values in an array
// output: new array with div by 2 from the original array

// const arr1 = [3, 9, 15, 4, 10]
// const div2 = arr1.map(value => value * 10)
// console.log(div2);

// // If you CaReD about your code, make it complex, reusable and dynamic
// const div2 = (array) => {
//     return array.map(value => value /2)
// }
// console.log(div2(arr1))




// Create a function that takes in an array of numbers and returns an array with only odd numbers.
// const arr2 = [2, 7, 3, 5, 8, 10, 13, -9]
// // output: [7, 3, 5, 13, -9]

// Pseudo code 
// input: array of numbers
// output: array with all odd numbers
// Process
// create a function named itsAlittleOdd
// use the function to iterate through the array only outputting odd numbers
// push odd numbers into new array
// using .filter to subset the odd numbers into an array


// // If you CaReD about your code, make it complex, reusable and dynamic
// const itsAlittleodd = (array) => {
//     return array.filter(value => value %2 !== 0)
// }
// console.log(itsAlittleodd(arr2))




// Create a function that takes in a string of multiple words and returns an array with only the words that have an odd number of characters.
// const pumbaa =
//   "Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"
// // // output: ["a", "wonderful", "ain't", "passing", "craze"]

// Pseudo code 
// input: string of words
// output: array with words with length that is odd
// Process
// create a function named noWorries
// use the function to split string into array and iterate through the array only outputting odd length words
// push odd length words into new array
// using .filter to subset the odd length words into an array


// // If you CaReD about your code, make it complex, reusable and dynamic
// const noWorries = (str) => {
//     let hasOddLength = str.split(" ")
//     return hasOddLength.filter(value => value.length %2 !== 0)
// }
// console.log(noWorries(pumbaa))



// Create a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
// const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // output: "nicework"





// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
// const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// // output: [58, "abcd", true]
// Create a function that takes in an array of strings and returns an array of strings with every other letter capitalized.
// const makesWackyWords = ["simba", "nala", "zazu", "rafiki"]
// // output: ["sImBa", "nAlA", "zAzU", "rAfIkI"]
// Create a function that takes in a string and returns a new string with all the vowels removed.
// const str = "javascript is awesome"
// // output: "jvscrpt s wsm"
// Create a function that takes in a string containing numbers and returns an array with each number at its own index and converted to the data type of number.
// const stringOfNumbers = "4574328"
// // output: [7, 8, 2, 1, 5, 4]
// 🏔 Stretch Goals
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// const arr1 = [3, 7, 10, 5, 4, 3]
// const arr2 = [7, 8, 2, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]
// Create a function that takes in an array of mixed data types and returns the first value that is a string. HINT: look into the JavaScript .find() method.
// const allTheData = [7, null, true, 2, "yo!", false, 4, "hello!"]
// // output: "yo!"
