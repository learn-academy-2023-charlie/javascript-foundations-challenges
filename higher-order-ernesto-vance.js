// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
// const arr1 = [3, 9, 15, 4, 10]
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
// const arr2 = [2, 7, 3, 5, 8, 10, 13]
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
// const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // output: "nicework"

// pseudocode:
// input: array
// output: a single string with only the letters from the array
// process: declare function called onlyLetts, and we use the .filter() built-in method because we want to exclude certain elements from the original array

// const onlyLetts = (array) => {
// let result = ""
//     return array.filter((value) => typeof value === "string")
// }
// console.log(onlyLetts(comboArr))

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
// const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// // output: [58, "abcd", true]

// Pseudo code
// input: an array
// output: a filtered array
// process: 

// const filterArrayValues = [58, "", "abcd", true, null, false, 0]

// const index = filterArrayValues.indexOf(1, 4, 5, 6)
// const x = filterArrayValues.splice(index, 1)

// const filterArr = (array) => {
//     return array.filter(value => value)
// }
// console.log(filterArr(filterArrayValues))



// Create a function that takes in an array of strings and returns an array of strings with every other letter capitalized.
// pseudocode: 
    // input: an array of strings
    // output: an array of strings with every other character capitalized
    // method: create a function called capitalizeEveryOtherLetter and use the .map() method to iterate accross the entire array
// const makesWackyWords = ["simba", "nala", "zazu", "rafiki"]
//  function capitalizeEveryOtherLetter(arr){
//     return arr.map(str =>{
//         let capitalizedStr = ""
//         for (let i = 0; i < str.length; i++){
//             if ( i % 2 === 0){
//                 capitalizedStr += str[i].toUpperCase()
//             }   else {
//                 capitalizedStr += str[i]
//             }
//         }
//         return capitalizedStr
//     })
//  }
// console.log(capitalizeEveryOtherLetter(makesWackyWords))

// // output: ["sImBa", "nAlA", "zAzU", "rAfIkI"]



// Create a function that takes in a string and returns a new string with all the vowels removed.
// Pseudocode: 
    // input: a string
    // output: a string without vowels
    // method: use the .replace() function to create a new string without vowels. used chat gpt to get the syntax correct
// const str = "javascript is awesome"


// let newString = str.replace(/[aeiou]/gi, '')
// console.log(newString)
// // output: "jvscrpt s wsm"

// Create a function that takes in a string containing numbers and returns an array with each number at its own index and converted to the data type of number.
// const stringOfNumbers = "4574328"
// // output: [7, 8, 2, 1, 5, 4]

// Pseudo Code
    // Input: a string of numbers
    // Output: an array
    // Process: arrow function using .split 

    // const stringOfNumbers = "4574328"
    
    // arrOfNumbers = (array) => {
    //     return array.split("")
    // }
    // const whatevs = "993894949sfsgsgdfgdfg"
    // console.log(arrOfNumbers(whatevs))


// 🏔 Stretch Goals
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// const arr1 = [3, 7, 10, 5, 4, 3]
// const arr2 = [7, 8, 2, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]

// Pseudo Code
    // Input: two arrays
    // Output: one combined array, with no duplicate values
    // Process: arrow function and .filter 

const arr1 = [3, 7, 10, 5, 4, 3]
const arr2 = [7, 8, 2, 1, 5, 4]

const removeDup = (arr1, arr2) => {
    const combined = arr1.concat(arr2)
    const unique = combined.filter((value, index) => {
        return combined.indexOf(value) === index
    })
    return unique
}
console.log(removeDup(arr1, arr2))

// Create a function that takes in an array of mixed data types and returns the first value that is a string. HINT: look into the JavaScript .find() method.
// const allTheData = [7, null, true, 2, "yo!", false, 4, "hello!"]
// // output: "yo!"

// Pseudo code:
    // Input: an array of mixed data types
    // Output: the first string in the array
    // Process: arrow function, for loop, .find, conditional

    const allTheData = [7, null, true, 2, "yo!", false, 4, "hello!"]

    const firstString = (array) => {
        return array.filter(value => typeOf value === 'string'

        }
    
    console.log(firstString(allTheData))