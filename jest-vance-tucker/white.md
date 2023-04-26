

// Prompt: create a function that returns an array of words all in uppercase
// Input: array: ["I", "am", "a", "web", "developer"]
// Output: ["I", "AM", "A", "WEB", "DEVELOPER"]
// Process: create a function named upperCaseStrings that takes in an array names and outputs a new array in all uppercase letters, using .map to iterate through the values of the array and a built in method .toUpperCase to convert all characters in the strings to uppercase letters. 

const upperCaseStrings = (array) => {
 return array.map(value => value.toUpperCase()) 
        
}