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
const blackCoffee = new Coffee ("black", "no", "no") 

console.log(blackCoffee);

// Write the code that outputs the black coffee's profile

console.log(blackCoffee.coffeeProfile());

// Write the code that makes a coffee object with 1 cream and 2 sugars

const coffeeCremSugar = new Coffee ("mocha", "1", "2")
console.log(coffeeCremSugar);

// Write the code that outputs the 1 cream and 2 sugars coffee profile
console.log(coffeeCremSugar.coffeeProfile()); 

// Latte Maker: create a class for Latte
// Write a Latte class that takes a flavor, a milk type, and a number of shots

class LatteMaker {
    constructor(flavor, type, shots) {
        this.flavor = flavor,
        this.type = type,
        this.shots = shots
    }
    // Write a method for your Latte class that outputs the latte's profile
    LatteProfile() {
        return `A ${this.type} latte with ${this.flavor()}, ${this.shots()}`
      }
    
}

// Write the code that makes a regular, single shot latte
const latteRegular = new LatteMaker ("regular", "none", "1")


// Log the regular, single shot latte's profile
console.log(latteRegular);

// Write the code that makes a double shot, hazelnut latte with almond milk.
const hazelnutLatte = new LatteMaker ("hazelnut", "almond milk", "2")

// Log the double shot, hazelnut latte with almond milk's profile.
console.log(hazelnutLatte);

// Volume of a Cylinder: create a class for Cylinder
// Write a class that calculates the volume of a Cylinder: v = πr^2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects
class cylinderV {
    constructor(radius, height) {
    this.radius = radius,
    this.height = height    
}
CylinderProfile() {
    return `The volume of our cylinder = ${(3.14 * (this.radius*this.radius) * (this.height)).toPrecision(6)}`
}
// calc() {
//     return 
// }
}
const cylinder1 = new cylinderV(2,3)
const cylinder2 = new cylinderV(3,4)
const cylinder3 = new cylinderV(4,5)
console.log(cylinder1.CylinderProfile());
console.log(cylinder2.CylinderProfile());
console.log(cylinder3.CylinderProfile());



