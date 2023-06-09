// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

// Create a function that takes in an array of numbers and returns an array with all numbers multiplied by 10.
const arr1 = [3, 9, 15, 4, 10]
// // output: [30, 90, 150, 40, 100]

const multi10 = (element) => {
    return element.map (value => value * 10)
}
console.log(multi10(arr1))

// Create a function that takes in an array of numbers and returns an array with all numbers divided by two.
// const arr1 = [3, 9, 15, 4, 10]
// // output: [1.5, 4.5, 7.5, 2, 5]

const divideBy = (element) => {
    return element.map (value => value / 2)
}
console.log(divideBy(arr1))

// Create a function that takes in an array of numbers and returns an array with only odd numbers.
const arr2 = [2, 7, 3, 5, 8, 10, 13, -9]
// // output: [7, 3, 5, 13, -9]

const onlyOdd = (element) => {
    return element.filter (value => value % 2 != 0 )
}
console.log( onlyOdd(arr2))

// Create a function that takes in a string of multiple words and returns an array with only the words that have an odd number of characters.
const pumbaa = "Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"
// // output: ["a", "wonderful", "ain't", "passing", "craze"]

const oddCharacters = (element) => {
    return element.split(" ").filter ((value) => value.length % 2 != 0)
}
console.log(oddCharacters(pumbaa))



// Create a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // output: "nicework"

const onlyLetters = (element) => {
    return element.filter(value => typeof value === "string" ).join("")
}
console.log(onlyLetters(comboArr))

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// // output: [58, "abcd", true]

const newArray = (element) => {
    return element.filter((value) => value != false || 0 || "" )
}
console.log(newArray(filterArrayValues))

// Create a function that takes in an array of strings and returns an array of strings with every other letter capitalized.
const makesWackyWords = ["simba", "nala", "zazu", "rafiki"]
// // output: ["sImBa", "nAlA", "zAzU", "rAfIkI"]

const capArr = (element) => {
    return element.map((value) => value).join(' ').toUpperCase(index %2 != 0)
}
console.log(capArr(makesWackyWords))

// Create a function that takes in a string and returns a new string with all the vowels removed.
const str = "javascript is awesome"
const vowels= 'aeiou'
// // output: "jvscrpt s wsm"

const noVowel = (element) => {
    return element.split("").filter(value => value.replace(/[aeiou]/g,'')).join(' ')
}
console.log(noVowel(str))

// Create a function that takes in a string containing numbers and returns an array with each number at its own index and converted to the data type of number.
const stringOfNumbers = "4574328"

const strNum = (element) => {
    return element.split("").map(value => Number(value))

}

console.log(strNum(stringOfNumbers))
// // output: [7, 8, 2, 1, 5, 4]


// 🏔 Stretch Goals
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
const arr3 = [3, 7, 10, 5, 4, 3]
const arr4 = [7, 8, 2, 1, 5, 4]
[3, 7, 10, 5, 4, 3, 7, 8, 2, 1, 5, 4]

const joinArr = (element,element1) => {
    return new Set(element.concat(element1))
} 

console.log(joinArr(arr3,arr4));

// // output: [3, 7, 10, 5, 4, 8, 2, 1]

// Create a function that takes in an array of mixed data types and returns the first value that is a string. HINT: look into the JavaScript .find() method.

const allTheData = [7, null, true, 2, "yo!", false, 4, "hello!"]

const firstString = (element) => {
    return element.find(value => typeof value ==='string')
}

console.log(firstString(allTheData))
// // output: "yo!"
