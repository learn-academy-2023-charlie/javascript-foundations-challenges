// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.

// Pseudocode:
// input: array of numbers
// output: array with all numbers multiplied by 10
// function name: multiplesOfTen
    // iterate across the values of the array
    // multiply values by 10
    // return array
// expected output: [30, 90, 150, 40, 100]


const arr1 = [3, 9, 15, 4, 10]

// function
const multiplesOfTen = arr1.map((value) => value * 10)

console.log(multiplesOfTen);
// output: [ 30, 90, 150, 40, 100 ]


// Write a function that takes in an array of numbers and returns a new array with only odd numbers.

// Pseudocode:
// input: array of numbers 
// output: array with only odd numbers
// function name: oddNums
    //iterate across all values of the array
    //check to see if the value is odd
    //return array with only odd values
// expected output: [ 7, 3, 5 ,13 ]

const arr2 = [2, 7, 3, 5, 8, 10, 13]

const oddNums = arr2.filter((value) => value % 2 != 0)

console.log(oddNums)
// output: [ 7, 3, 5, 13 ]

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.

// Pseudocode:
// input: array of numbers and letters
// output: string 
// function name: lettersLeft
    //iterate across all values of the array
    //check to see if value is a character
    // return string of those characters
// expected output: "nice work"

const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]

const lettersLeft = comboArr.filter((value) => typeof value === "string")

console.log(lettersLeft.join(""))

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.

// Pseudocode:
// input:
// output:
// function name:
// expected output:

// const filterArrayValues = [58, "", "abcd", true, null, false, 0]