// Coffee marker: copy the given Coffee class into a text editor
// Write the code that makes a black coffee object
// Write the code that outputs the black coffee's profile
// Write the code that makes a coffee object with 1 cream and 2 sugars
// Write the code that outputs the 1 cream and 2 sugars coffee profile
// class Coffee {
//   constructor(type, cream, sugar) {
//     this.type = type.toLowerCase()
//     this.cream = cream
//     this.sugar = sugar
//   }

//   coffeeProfile() {
//     return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
//   }

//   creams() {
//     if (this.cream > 1) {
//       return `${this.cream} creams`
//     } else {
//       return `${this.cream} cream`
//     }
//   }

//   sugars() {
//     if (this.sugar > 1) {
//       return `${this.sugar} sugars`
//     } else {
//       return `${this.sugar} sugar`
//     }
//   }
// }
// Latte Maker: create a class for Latte
// // Write a Latte class that takes a flavor, a milk type, and a number of shots
// // Write a method for your Latte class that outputs the latte's profile

// class Latte {
//     constructor(flavor, milk, shots = 1) {
//         this.flavor = flavor
//         this.milk = milk
//         this.shots = shots
//     }
//     latteProfile () { 
//         return`A ${this.flavor}latte with ${this.milk} milk with ${this.shots} shots`
//     }
// }
// // Write the code that makes a regular, single shot latte
// // Log the regular, single shot latte's profile
// const regular = new Latte("regular", "no", 1)
// console.log (regular.latteProfile()); 

// // Write the code that makes a double shot, hazelnut latte with almond milk.
// // Log the double shot, hazelnut latte with almond milk's profile.
// const hazelnut = new Latte("hazelnut", "almond", 2)
// console.log(hazelnut.latteProfile());


// Volume of a Cylinder: create a class for Cylinder
// Write a class that calculates the volume of a Cylinder: v = πr^2h (r is the radius and h is the height of the cylinder)

// class Volume {
//     constructor(radius, height) {
//         this.radius = radius
//         this.height = height
    // }
//     equation () {
//         return Math.PI * (this.radius ** 2) * this.height
//     }
// }
// const cyl1 = new Volume(2,10)
// console.log(cyl1.equation())

// // Write the code that rounds the volume of the cylinder to four decimal places
// class Volume {
//     constructor(radius, height) {
//         this.radius = radius
//         this.height = height
//     }
//         equation () {
//             return Number((Math.PI * (this.radius ** 2) * this.height).toFixed(4))
// }
// }

// // let num = new Volume
// // let roundedNum = Math.ceil(num * 10000) / 10000
// // roundedNum = roundedNum.toFixed(4);
// // console.log(roundedNum);
// // Write the code that creates three unique cylinder objects
// const cyl2 = new Volume (3, 5)
// console.log(cyl2.equation())

// const cyl3 = new Volume (4,8)
// console.log(cyl3.equation())

// const cyl4 = new Volume (5,3)
// console.log(cyl4.equation())
