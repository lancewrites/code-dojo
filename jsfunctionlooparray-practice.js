// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
const mult3 = (array) => { //function called mult3 takes array argument in parameter
    let newArr = [] //variable called newArr with for loop
    for(i = 0; i < array.length; i++){ //loops through each index in the parameter's array,
        newArr.push(array[i] *3) //
    }
    return newArr

}
var testArr1 = [3, 9, 15, 4, 10]

const multy = (array) => {
    let newArr = array.map(value => value *3)
    return newArr
}
console.log(mult3(testArr1))// // --> [9, 27, 45, 12, 30]
console.log(multy(testArr1))

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
const oddOnly = (array) => {
    let newArr = array.filter(value => {
            return value%2 !== 0
        })
        return newArr
    }

const oddity = (array) => {
    let newArr = []
    for(i = 0; i < array.length; i++){
        if(array[i]%2 !== 0){
            newArr.push(array[i])
        }
    } return newArr
}
console.log(oddOnly(testArr2))
console.log(oddity(testArr2))
// // --> [-7, 3, 5, 13]


// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]

const stringOnly = (array) => {
    let newString = ""
    for(i = 0; i<array.length; i++){
        if(typeof array[i] === "string"){
            newString += array[i]
        }
    }
    return newString
}

const stringy = (array) =>{
    let newString = array.filter(value => {
        return typeof value === "string"
    }).join("")
    return newString
}
console.log(stringOnly(comboArr))// // --> "nicework"
console.log(stringy(comboArr))// // --> "nicework"

// Create a function that takes in an array of numbers and returns the sum.
var addThese1 = [1, 2, 3, 4]
var addThese2 = []
const sumArr = (array) => {
    let sum = 0
    for(i = 0; i<array.length; i++){
        if(array[i] == null){
            return sum
        } else {
            sum += array[i]
        }
       
    }
    return sum
}


console.log(sumArr(addThese1))
console.log(sumArr(addThese2))

// // --> 10

// var addThese2 = []
// // --> 0
// Create a function that takes in an array of numbers and returns the index of the largest number.
var indexHighestNumber = [1, 4, 2, 3]
// // --> 1


// STRETCH Challenges

// Create a function that takes in two arrays and returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3, 3]
// var arr2 = [7, 8, 2, 3, 1, 5, 4]
// // --> [3, 7, 10, 5, 4, 8, 2, 1]
// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
// var arrayLength = 6
// var arrayValue = 0
// // --> [0, 0, 0, 0, 0, 0]

// var arrayLength = 4
// var arrayValue = 11
// // --> [11, 11, 11, 11]
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
// var addUp1 = 4
// // 1 + 2 + 3 + 4 = 10
// // --> 10

// var addUp2 = 10
// // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// // --> 55

// var addUp3 = 600
// // --> 180300
// EPIC Challenges

// Create a function called highLow that takes in a number and returns whether the number is higher or lower than the "answer".
// Create an HTML page and link your JavaScript file. More info here.
// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive).
// As a user, I can see if my guess is too high or too low.
// As a user, if I guess the "answer" correctly I am notified that I won.
// As a user, I can continue to guess the "answer" until I am correct.
// STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message.
