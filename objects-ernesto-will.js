const person = {
    firstName: "Arthur",
    lastName: "Dent"
  }

// Write the code that accesses the first name of the person object.

// console.log(person.firstName);
// output: "Arthur"



// Write the code that accesses the last name of the person object.

// console.log(person.lastName);
// output: "Dent"



// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.

Object.assign(person, {homePlanet: "Earth"})
// console.log(person);
// output: { firstName: 'Arthur', lastName: 'Dent', homePlanet: 'Earth' }



// Update the person object with a method that logs "Arthur Dent is from planet Earth".

Object.assign(person, {makeASentence: function(){
    return `${this.firstName} ${this.lastName} is from planet ${this.homePlanet}`
}})

console.log(person.makeASentence());
// Arthur Dent is from planet Earth

