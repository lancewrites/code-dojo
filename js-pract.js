// Write the code that will log the outcome of 34 added to 71.
 
// console.log()
// Write the code that will log the outcome of 67 subtracted from 123.
//  console.log(123-67)
// Write the code that will log the outcome of 56 multiplied by 23.
//  console.log(56*23)
// Write the code that will log the outcome of 45 divided by 5.
//  console.log(45/5)
// Write the code that will log the outcome of 5 to the power of 7.
//  console.log(5^7)
// Write the code that will log the whole number remainder of 33 divided by 6.
// console.log(33/6)
// Write the code that will log the length of a string containing your name.
// var myName = "Lance"
// console.log(myName.length)
// Write the code that will log whether your string includes the letter "e"?
// console.log(myName.includes("e"))
// Write the code that will log the character at the first index of the string.

// console.log(myName[0])
// Write the code that will log the string in all uppercase letters.
// console.log(myName.toUpperCase())

// Is 34 divided by 3 greater than 67 divided by 2?
 //console.log(3 > (67/2))
// Does 5 evaluate to the same as "5"?
 //console.log(5 == "5")
// Does 5 strictly equal "5"?
 //console.log(5 === "5")
 
// Does !3 strictly equal 3?
//console.log(!3 === 3)
// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
//console.log("LEARN".length === 5 && "Student".length === 7)
// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
//console.log("LEARN".length === 5 || "Student".length === 10)
// Does "LEARN" contain the subset "RN"?
//console.log("LEARN".includes("RN"))
// Does "LEARN" contain the subset "rn"?
//console.log("LEARN".includes("rn"))
// Does "LEARN"[0] strictly equal "l"?
//console.log("LEARN"[0] === "l")
// Modify the code from the previous question to return true.
//console.log("LEARN"[0] === "L")

const theQuestion = "life, the universe, and everything"
var theAnswer = 42

// var arrayIt = [theQuestion]
// console.log(arrayIt)
const arrayIt = (string) =>{
    
    return `${[string]}`
    
}
arrayIt.reverse
console.log







// Write the code that will log theAnswer divided by 2.
// console.log(theAnswer/2)

// Write the code that will log the length of theQuestion.
// console.log(theQuestion.length)

// Write the code that will log the index of the character "f" in the theQuestion.
// console.log(theQuestion.indexOf("f"))

// Write the code that will log the concatenation of the two variables.
//console.log(theQuestion.concat(theAnswer))

// Write the code that will log "the universe".
// console.log(theQuestion.indexOf("the universe"))
// console.log(theQuestion.indexOf(", and"))
// console.log(theQuestion.slice(6, 18))

// Write the code that will log the character "l" from theQuestion.
// console.log(theQuestion[0])

// Write the code that will log whether theQuestion.length is greater than theAnswer.
// var compare = (theQuestion.length > theAnswer)
// console.log(theQuestion.length > theAnswer)


// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
    var budget = 102
    if(budget < 100){
        //console.log("In Budget")
    } else {
        //console.log("Oh No!")
    }
// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
    var hungry = true
    if(hungry === true){
        //console.log("Eat food")
    } else {
        //console.log("keep coding")
    }
// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
    var trafficLight = "red"
    if(trafficLight == "green"){
        //console.log("go")
    } else if(trafficLight == "yellow"){
        //console.log("slow down")
    } else{
        //console.log("stop")
    }

// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".

// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.


// Consider this variable:

const person = {
  firstName: "Arthur",
  lastName: "Dent"
}
// Write the code that accesses the first name of the person object.
console.log(person.firstName)
// Write the code that accesses the last name of the person object.
console.log(person.lastName)
// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
person.homePlanet = "Earth";
//console.log(person)
// Update the person object with a method that logs "Arthur Dent is from planet Earth".
person.fullSent = function () {
    return `${this.firstName} ${this.lastName} is from planet ${this.homePlanet}`
}
console.log(person.fullSent())
// Consider this variable:

const product = {
  name: "chair",
  price: 24.99
}
// Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
const describeProduct = (object) => {
    return `The product is a ${object.name}. It costs $${object.price}`
}

console.log(describeProduct(product))
// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.
const totalWithTax = (object) => {
    let beforeRound = 0
    beforeRound = object.price * 1.07 * 100 
    return Math.round(beforeRound)/100
  
}
console.log(totalWithTax(product))

// Consider this variable:

const lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"]
}
// Write the code that accesses the ingredients property.
lunch.ingredients
// Write the code that access the third ingredient of the lunch object.
console.log(lunch.ingredients[2])

// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

const sandIng = (object) => {
    return `The ingredients for a ${object.name} ${object.type} are ${object.ingredients[0]}, ${object.ingredients[1]}, ${object.ingredients[2]}.`
    
}
console.log(sandIng(lunch))
// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
lunch.sandwich = function () {
    return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients[0]}, ${this.ingredients[1]}, ${this.ingredients[2]}.`
}
console.log(lunch.sandwich())

// Consider this variable:

const animals = [
  { name: "Waffles", type: "dog", age: 7 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 }
]
// Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.
const onlyCats = (array) => {
  return animals.filter(value => value.type === "cat")
}

console.log(onlyCats(animals)) //console.logs the onlyCats function with the animals array passed in as the parameter argument

// Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.

const onlyNames = (array) => {
    return array.map(value => value.name)
}
// Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.
// Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.
// Consider this variable:

// const author = {
//   name: "H. G. Wells",
//   genre: "science fiction"
// }
// Write the code that destructures the author object so that the following code snippet will run successfully:
// console.log(`${name} is a ${genre} author`)
// // Output: "H. G. Wells is a science fiction author"
// Consider this variable:

// const pokeOne = {
//   species: "Charmandar",
//   pokemon_type: "Fire"
// }

// const pokeTwo = {
//   species: "Magikarp",
//   pokemon_type: "Water"
// }
// Create a function called describePokemon that take an object like the ones above and uses destructuring to return a description of the Pokemon so that the following code snippet will run successfully:
// console.log(describePokemon(pokeOne))
// // Output: "Charmandar is a Fire pokemon"
// console.log(describePokemon(pokeTwo))
// // Output: "Magikarp is a Water pokemon"
// Consider this variable:

// const triangleDimensions = {
//   base: 2,
//   height: 5
// }
// Modify the triangleDimensions object to have a method that returns the area of the triangle.
// Write the code that will update the base to be the value of 6.
// Consider this variable:

// const learn = {
//   cohorts: {
//     "2021": ["Alpha", "Bravo", "Charlie", "Delta", "Echo"],
//     "2022": ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot"]
//   }
// }
// Write the code that logs the name of your cohort.
// Write the code that uses destructuring to log the name of your cohort.
// Create a function that takes an object like the one above and returns an array with a string of every cohort name and year.
// Output: ["2021 Alpha", "2021 Bravo", "2021 Charlie", "2021 Delta", "2021 Echo", "2022 Alpha", "2022 Bravo", "2022 Charlie", "2022 Delta", "2022 Echo", "2022 Foxtrot"]


// Story: As a programmer, I can make a car.
// Write a variable called myCar which is an instance of the class Car
// Story: As a programmer, I can give my car a model on initialization.
// The model for the car class can be "generic car"
// Story: As a programmer, I can give my car a year on initialization.
// The year for the car class can be "myCar year"
// Story: As a programmer, I can tell how many wheels myCar has.
// Calling the method wheels will return 4
// Story: As a programmer, I can make a Tesla car.
// class Tesla inherits from class Car
// Create an object called myTesla which is a instance of class Tesla
// Story: As a programmer, I can give my Tesla a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Tesla a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
// Story: As a programmer, I can make a Toyota car.
// class Toyota inherits from class Car
// create an object called myToyota which is a instance of class Toyota
// Story: As a programmer, I can give my Toyota a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Toyota a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
// Story: As a programmer, I can make a Volkswagen car.
// class Volkswagen inherits from class Car
// create an object called myVolkswagen which is a instance of class Volkswagen
// Story: As a programmer, I can give my Volkswagen a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Volkswagen a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
// Story: As a programmer, I can give all my cars a lights property. Lights start in the off position.

// Story: As a programmer, I can turn the lights in all my cars on and off.

// Story: As a programmer, I can give all my cars a signal property. Turn signal starts in the off position.

// Story: As a programmer, I can determine the speed of a car. Speed starts at 0 mph.

// Story: As a programmer, I can speed my Tesla up by 10 per acceleration.

// Story: As a programmer, I can slow my Tesla down by 7 per braking.

// Story: As a programmer, I can speed my Toyota up by 5 per acceleration.

// Story: As a programmer, I can slow my Toyota down by 2 per braking.

// Story: As a programmer, I can speed my Volkswagen up by 7 per acceleration.

// Story: As a programmer, I can slow my Volkswagen down by 5 per braking.

// Story: As a programmer, I can call upon a carInfo method that will tell me all the information about a car.

// The method can be created in the parent class and accessed by all child classes

class Car{
    constructor(){
        this.model = "generic model"
        this.year = "myCar year"
        this.lights = false
        
    }
    wheels(){
        this.wheels = 4
    }
}
let myCar = new Car()

myCar.wheels()
console.log(myCar)

class Telsa extends Car{
    constructor(model, year){
        super(model, year)
        
    }

}

let myTesla = new Telsa()
console.log(myTesla)