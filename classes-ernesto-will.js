class Coffee {
    constructor(type, cream, sugar) {
      this.type = type.toLowerCase()
      this.cream = cream
      this.sugar = sugar
    }
  
    coffeeProfile() {
      return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
    }
  
    creams() {
      if (this.cream > 1) {
        return `${this.cream} creams`
      } else {
        return `${this.cream} cream`
      }
    }
  
    sugars() {
      if (this.sugar > 1) {
        return `${this.sugar} sugars`
      } else {
        return `${this.sugar} sugar`
      }
    }
  }
// Coffee marker: copy the given Coffee class into a text editor
// Write the code that makes a black coffee object
//   pseudocode:
        // input: string
        // output: string
        // method: create object using new keyword and assign a string via dot notation

 const drink = new Coffee("Black", 0, 0)
  // console.log(drink) 
// output: Coffee { type: 'black', cream: 0, sugar: 0 }

// Write the code that outputs the black coffee's profile

// console.log(drink.coffeeProfile())
// outout: A black coffee with 0 cream, 0 sugar

// Write the code that makes a coffee object with 1 cream and 2 sugars

const lightDrink = new Coffee("Black", 1, 2)
// console.log(lightDrink) 
// output: Coffee { type: 'black', cream: 1, sugar: 2 }

// Write the code that outputs the 1 cream and 2 sugars coffee profile
// console.log(lightDrink.coffeeProfile())
// output: A black coffee with 1 cream, 2 sugars



// Latte Maker: create a class for Latte

// Write a Latte class that takes a flavor, a milk type, and a number of shots
// class Latte {
//   constructor(flavor, milkType, numShots) {
//     this.flavor = flavor
//     this.milkType = milkType
//     this.numShots = numShots
//   }
// }

// const drink1 = new Latte("Hazelnut", "Almond Milk", 3)
// console.log(drink1);
  // Output: Latte { flavor: 'Hazelnut', milkType: 'Almond Milk', numShots: 3 }

// Write a method for your Latte class that outputs the latte's profile
class Latte {
  constructor(flavor, milkType, numShots) {
    this.flavor = flavor
    this.milkType = milkType
    this.numShots = numShots
  }

  latteProfile() {
    return `A ${this.flavor} latte with ${this.milkType} and ${this.numShots} shots of espresso`
  }
}

const drink1 = new Latte("Hazelnut", "Almond Milk", 3)
// console.log(drink1.latteProfile());
  // Output: A Hazelnut latte with Almond Milk and 3 shots of espresso

// Write the code that makes a regular, single shot latte

const drink2 = new Latte("Regular", "Whole Milk", 1)
// console.log(drink2);
  // Latte { flavor: 'Regular', milkType: 'Whole Milk', numShots: 1 }

// Log the regular, single shot latte's profile

// console.log(drink2.latteProfile());
  // Output: A Regular latte with Whole Milk and 1 shots of espresso

// Write the code that makes a double shot, hazelnut latte with almond milk.

const drink3 = new Latte("Hazelnut", "Almond Milk", 2)
// console.log(drink3);
  // Latte { flavor: 'Hazelnut', milkType: 'Almond Milk', numShots: 2 }

// Log the double shot, hazelnut latte with almond milk's profile.

// console.log(drink3.latteProfile());
  // Output: A Hazelnut latte with Almond Milk and 2 shots of espresso

// Volume of a Cylinder: create a class for Cylinder

// Write a class that calculates the volume of a Cylinder: v = πr^2h (r is the radius and h is the height of the cylinder)

// class Cylinder {
//   constructor(radius, height) {
//     this.pi = Math.PI
//     this.radius = radius
//     this.height = height
//   }

//   volume() {
//     return this.pi * Math.pow(this.radius, 2) * this.height
//   }

// }

// const newShape = new Cylinder(2, 5)
// console.log(newShape.volume())
  // Output: 62.83185307179586

// Write the code that rounds the volume of the cylinder to four decimal places

class Cylinder {
  constructor(radius, height) {
    this.pi = Math.PI
    this.radius = radius
    this.height = height
  }

  volume() {
    return (this.pi * Math.pow(this.radius, 2) * this.height).toFixed(4)
  }

}

const newShape = new Cylinder(2, 5)
console.log(newShape.volume())
  // Output: 62.8319

// Write the code that creates three unique cylinder objects

const newShapes = []

newShapes.push(new Cylinder(1, 2))
newShapes.push(new Cylinder(3, 4))
newShapes.push(new Cylinder(5, 6))

console.log(newShapes[0].volume())
  // Output: 6.2832
