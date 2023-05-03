// // Coffee marker: copy the given Coffee class into a text editor



// // Write the code that outputs the 1 cream and 2 sugars coffee profile
// // class Coffee {
// //   constructor(type, cream, sugar) {
// //     this.type = type.toLowerCase()
// //     this.cream = cream
// //     this.sugar = sugar
// //   }

// //   coffeeProfile() {
// //     return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
// //   }

// //   creams() {
// //     if (this.cream > 1) {
// //       return `${this.cream} creams`
// //     } else {
// //       return `${this.cream} cream`
// //     }
// //   }

// //   sugars() {
// //     if (this.sugar > 1) {
// //       return `${this.sugar} sugars`
// //     } else {
// //       return `${this.sugar} sugar`
// //     }
// //   }
// // }


// // Write the code that makes a black coffee object

// // const black = new Coffee ("black", "no", "no")

// // OUTPUT: A black coffee coffee with no cream, no sugar

// // Write the code that outputs the black coffee's profile

// // console.log(black.coffeeProfile())

// // OUTPUT: A black coffee with no cream cream, no sugar sugar

// // Write the code that makes a coffee object with 1 cream and 2 sugars

// // const  simple = new Coffee ("Simple", "1", "and 2")

// // Write the code that outputs the 1 cream and 2 sugars coffee profile

// // console.log(simple.coffeeProfile())

// // -----------------------------------------------

// Latte Maker: create a class for Latte
// class Latte {
//   constructor(flavor, milk, shots) {
//     this.flavor = flavor
//     this.milk = milk
//     this.shots = shots
//   }
//   latteProfile () {
//     return `A ${this.flavor} latte with ${this.milk} milk and ${this.shots} shot of espresso.`
//   }
// } 
// const latte1 = new Latte("regular", "no", "single")
// const latte2 = new Latte("hazelnut", "almond", "double")
// console.log(latte1.latteProfile());
// console.log(latte2.latteProfile());


// Write a Latte class that takes a flavor, a milk type, and a number of shots
// Write a method for your Latte class that outputs the latte's profile
// Write the code that makes a regular, single shot latte
// Log the regular, single shot latte's profile
// Write the code that makes a double shot, hazelnut latte with almond milk.
// Log the double shot, hazelnut latte with almond milk's profile.

// output:
// A regular latte with no milk and single shot of espresso.
// A hazelnut latte with almond milk and double shot of espresso.



// Volume of a Cylinder: create a class for Cylinder
// Write a class that calculates the volume of a Cylinder: v = πr^2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects
class Calculator {
  constructor(radius, height){
  this.radius = radius
  this.height = height
}
getVolume () {
const volume = Math.PI * this.radius * this.radius * this.height
return volume.toFixed(4)
}
}

const cylinder1 = new Calculator (3, 5)
const cylinder2 = new Calculator (100, 200)
const cylinder3 = new Calculator (123, 345)
const cylinder4 = new Calculator (1, 2)

console.log(cylinder1.getVolume());
console.log(cylinder2.getVolume());
console.log(cylinder3.getVolume());
console.log(cylinder4.getVolume());

