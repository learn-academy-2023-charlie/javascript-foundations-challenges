// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
const testArr1 = [3, 9, 15, 4, 10]
// output: [9, 27, 45, 12, 30]
const mult3 = (array) => {
    let newArray = []
    for(let i = 0; i <array.length; i++){
        newArray.push(array[i]*3) 
        
    } return newArray
}
console.log(mult3(testArr1));
//output is 9, 27, 45, 12, 30


// Write a function that takes in an array of numbers and returns a new array with only odd numbers.

// Pseudocode:
// input an array of numbers 
// output a new array of only odd numbers 
// creat function called oddArray 
// iterate through test array using a for loop
// if a number is odd, add to array
// return odd number array

const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]

const oddArray = (array) => {
    let odd = []
    for(let i = 0; i < array.length; i++){
        if( array[i] % 2 != 0) {
            odd.push(array[i])
        }
        else{}
    }
    return odd
}
console.log(oddArray(testArr2));
// output is -7, 3, 5, 13 
// output: [-7, 3, 5, 13]


// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
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
// // output: "nicework"

// Pseudocode
// input: array of numbers and letters
// output: array string of only letters
// - Create function named funcOne
// - turn array into string
// - create 
// - sort string for only letters with if loop and typeof method

const funcOne = (array) => {
    let odd = []
    for(let i = 0; i < array.typeof(letters); i++){
        if( array[i] % 2 != 0) {
            odd.push(array[i])
        }
        else{}
    }
    return odd
}
console.log(funcOne(comboArr));


// Create a function that takes in an array of numbers and returns the sum.
// const addThese1 = [1, 2, 3, 4]
// // output: 10

// const addThese2 = []
// // output: 0



// Create a function that takes in an array of numbers and returns the index of the largest number.
// const indexHighestNumber = [1, 4, 2, 3]
// // output: 