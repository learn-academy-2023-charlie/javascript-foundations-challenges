// 💻 Challenges
// Coffee marker: copy the given Coffee class into a text editor
// class Coffee {
//     constructor(type, cream, sugar) {
//       this.type = type //.toLowerCase()
//       this.cream = cream
//       this.sugar = sugar
//     }
  
//     coffeeProfile() {
//       return `A ${this.type} coffee with ${this.milks()}, ${this.sugars()}`
//     }
  
//     milks() {
//       if (this.cream > 1) {
//         return `${this.cream} milks`
//       } else {
//         return `${this.cream} cream`
//       }
//     }
  
//     sugars() {
//       if (this.sugar > 1) {
//         return `${this.sugar} sugars`
//       } else {
//         return `${this.sugar} sugar`
//       }
//     }
//   }
// Write the code that makes a black coffee object
// const blackCoffee = new Coffee("black", "no", "no")
// Write the code that outputs the black coffee's profile
// console.log(blackCoffee.coffeeProfile())
// Write the code that makes a coffee object with 1 cream and 2 sugars
// const sweetCoffee = new Coffee("sweet", 1, 2)
// Write the code that outputs the 1 cream and 2 sugars coffee profile
// console.log(sweetCoffee.coffeeProfile())
// Write a Latte class that takes a flavor, a milk type, and a number of shots
// Latte Maker: create a class for Latte
class LatteMaker {
  constructor(flavor, milk, shots) {
    this.flavor = flavor //.toLowerCase()
    this.milk = milk
    this.shots = shots
  }

  latteProfile() {
    return `A ${this.flavor} latte with ${this.milks()}, ${this.espresso()}`
  }
    
  milks() {
    return `${this.milk} milk`
  }

  espresso() {
    if (this.shots > 1) {
      return `${this.shots} shots`
    } else {
      return `${this.shots} shot`
    }
  }
}

// Write a method for your Latte class that outputs the latte's profile

console.log(LatteMaker.latteProfile)

// Write the code that makes a regular, single shot latte

const regLatte = new LatteMaker("regular", "regular", 1)

// Log the regular, single shot latte's profile
console.log(regLatte.latteProfile());

// Write the code that makes a double shot, hazelnut latte with almond milk.

const nonDairyNuts = new LatteMaker("hazelnut", "almond", 2)

// Log the double shot, hazelnut latte with almond milk's profile.
console.log(nonDairyNuts.latteProfile());

// Volume of a Cylinder: create a class for Cylinder
// Write a class that calculates the volume of a Cylinder: v = πr^2h (r is the radius and h is the height of the cylinder)

class Cylinder {
  constructor(π, radius, height) {
    this.π = 3.14159265358979 //.toLowerCase()
    this.radius = radius
    this.height = height
  }

  volume() {
    return `A cylinder with a height of ${this.height} and a radius of ${this.radius} will have a volume of ${this.π} times ${squareRadius()} times ${this.height}, which equals ${calcVolume()}`
  }
    
  squareRadius() {
    return this.radius * this.radius
  }

  calcVolume() {
    return this.pi * this.squareRadius() * this.height
  }
}

// Write the code that rounds the volume of the cylinder to four decimal places

// Write the code that creates three unique cylinder objects
