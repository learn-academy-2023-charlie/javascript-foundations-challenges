// // // 💻 Challenges
// // // Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Use .map() or .filter() to complete all of the following exercises.
// // // Don't forget to pseudo code.


// // // Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
// const arr1 = [3, 9, 15, 4, 10]
// // // // output: [30, 90, 150, 40, 100]

// // //pseudo code: 
// // //input: array of numbers 
// // //output: a new array with all numbers multiplied by 10 : [30, 90, 150, 40, 100]
// // //process: create a function that iterates through the array and multiplies each element by 10 and returns answers into a new array.

// const mult10 = (array) => {
//     return array.map(value => value * 10)
// }

// console.log(mult10(arr1))

// // // Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// // const arr2 = [2, 7, 3, 5, 8, 10, 13]
// // // // output: [7, 3, 5, 13]

// // //pseudo code:
// // //input: an array of numbers
// // //output: a new array with only odd numbers
// // //process: create a function that iterates through the array and returns only the odd numbers into a new array.

// const onlyOdd = (array) => {
//     return array.filter(value => value % 2 !== 0)
// }

// console.log(onlyOdd(arr2))

// // // Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
// // const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // // // output: "nicework"

// // //input: array
// // //output: string of letters from array
// // //process: make a function that filters letters from input array and adds them to output string by iterating through array, check if the value is a datatype string, pull the string letters, and return pulled letters.

// const pickLetter = (array) => {
//     return array.filter(value => typeof(value) === "string").join("")

// }
// console.log(pickLetter(comboArr))


// // // Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
// // const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// // // // output: [58, "abcd", true]

// // //input:array
// // //output: array subset
// // //process: create a function which iterates through array, identifies datatype, filters and returns non-false/non-null/non-0/non-blank into a new array

// // const falseVal = (array) => {
// //     return array.filter(value => typeof(value)){
    
// //     }
// // }
// console.log(typeof(falseVal) === boolean);

// //if (typeof(value) !== false && typeof(value) !== null && typeof(value) !== 0 && typeof(value) !== undefined)
// console.log(falseVal(filterArrayValues));

// Create a function that takes in an array of strings and returns an array of strings with every other letter capitalized.
//Pseudocode
// creat an array of strings 
//output is an array of strings with every other letter capitlized
// use .toUpperCase



// const makesWackyWords = ["simba", "nala", "zazu", "rafiki"]

// const getOnlyEvenStrings = (array) => {
//   return array.map((value, index, array) => {

// }
// console.log(getOnlyEvenStrings(makesWackyWords))

// // output: ["sImBa", "nAlA", "zAzU", "rAfIkI"]

const makesWackyWords = ["simba", "nala", "zazu", "rafiki"]
 function capitalizeEveryOtherLetter(arr){
    return arr.map(str =>{
        let capitalizedStr = ""
        for (let i = 0; i < str.length; i++){
            if ( i % 2 === 0){
                capitalizedStr += str[i].toUpperCase()
            }   else {
                capitalizedStr += str[i]
            }
        }
        return capitalizedStr
    })
 }
console.log(capitalizeEveryOtherLetter(makesWackyWords))


// const arr = ["apple", "banana", "cherry"];

// const capitalizedArr = (arr) => {
//     return arr.map(index => index.split("")) { 
// if(index % 2 == 0){
//      return arr.map(index => index.toUpperCase)      
//     } else {
//      return index
//     }
//     }
// }

// console.log(capitalizedArr(arr));
// const arr = ["apple", "banana", "cherry"];

// const capitalizedArr = arr.map(str =>
//   str
//     .toLowerCase()
//     .split("")
//     .map((char, index) => index % 2 === 0 ? char.toUpperCase() : char)
//     .join("")
// );

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
