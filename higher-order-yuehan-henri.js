// Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Use .map() or .filter() to complete all of the following exercises.
// Don't forget to pseudo code.


// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
// pseudocode:
// input: arr1
// output: new array will al numbers multiplied by 10
// process: create a function name multi10
// use .map method to iterating the value to and return the value mutiplied by 10



// const arr1 = [3, 9, 15, 4, 10]

// const multi10 = (array) => {
//     return array.map((value) => value * 10)
// }

// console.log(multi10(arr1));

// // output: [30, 90, 150, 40, 100]
// // actual output: [30, 90, 150, 40, 100]


// Write a function that takes in an array of numbers and returns a new array with only odd numbers.

// pseudocode:
// input: array
// output: new array with only odd numbers
// process: create a function name oddNum
// use .filter method to iterating the value to and return the value that is value % 2 != 0.

// const arr2 = [2, 7, 3, 5, 8, 10, 13]

// const oddNum = (array) => {
//     return array.filter((value) => value % 2 != 0)
// }

// console.log(oddNum(arr2))


// // output: [7, 3, 5, 13]
// // Actual output: [7, 3, 5, 13]


// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.


// pseudocode:
// input: array
// output: a string with only the letters
// process: create a function name onlyLetters
// do typeOf operator to the array then use .filter method to iterating the value to and return value with only letters and use .join("") to make it a string.

// const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]


// console.log(onlyLetters(comboArr));
// // output: "nicework"
// actual output: "nicework"

// const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]

// const onlyLetters = (array) => {
//     return array.filter(value => typeof(value) === "number")
// }

// console.log(onlyLetters(comboArr));

//output given : [ 7, 10, 3 ]


// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
///pseudocode:
// input: array
// output: a array without any false,null,0 or blank values
// process: create a function name arrayFilter
// use the .filter operator to filter the data that we want to 
// const filterArrayValues = [58, "", "abcd", true, null, false, 0] 
// const arrayFilter = (array) => {
//     return array.filter((value) => Boolean(value));
// };
// console.log(arrayFilter(filterArrayValues));
// output comment: The boolean function returns true for truthy values and false for falsy values, so all the falsy values
// (empty string, null, false and 0) are filtered out of the resulting array.
// output: [58, "abcd", true]

// 🏔 Stretch Goals
// Create a function that takes in a string and returns a new string with all the vowels removed.
///pseudocode:
// input: string
// output: a string with all the vowels removed
// process: create a function name noVowels
// use the .split operator to turn a string into an array
// use the .filter operator  to separate the vowels from the array
// use the .join operator to turn the array back into a string

// const str = "javascript is awesome"
// const noVowels = (string) => {
//     return string.split("").filter(value => (value) != "a" && (value) != "e" && (value) != "i" && (value) != "o" && (value) != "u").join("");
// };
// console.log(noVowels(str));

// output: "jvscrpt s wsm"
// Create a function that takes in a string and returns a new string with all the vowels removed.
// const str = "javascript is awesome"
// const noVowels = (string) => {
//     return string.split("").filter(value => (value) != "a", "e", "i", "o", "u").join("");
// };
// console.log(noVowels(str));
//  output: the way we tried to do the code and it doesn't work as expected.

// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
///pseudocode:
// input: array1 and array2
// output: a array with no duplicate values
// process: create a function name noDupes
// use the .concat method with array1 and array2
// use the .join operator to turn 

const arr1 = [3, 7, 10, 5, 4, 3]
const arr2 = [7, 8, 2, 1, 5, 4]

const noDupes = (array1, array2) => {
    let mergedArrays = array1.concat(array2);
    return mergedArrays.filter ((value, index) => (index) == mergedArrays.indexOf(value));
    };
console.log(noDupes(arr1, arr2));

// output: [3, 7, 10, 5, 4, 8, 2, 1]
// output we got: [ 3, 7, 10, 5, 4, 8,  2, 1 ]
