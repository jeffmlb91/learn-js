//Concatination 
let firstName = "Paul";
let secondName = "John"
let fullName = firstName + " " + secondName;
let secondFullName = firstName.concat(" ",secondName)
console.log('First concatination method',fullName)
console.log('First second method',secondFullName)

//Appending strings

let originalWord = "Sonny";
originalWord += " is a Software Engineer"
console.log(originalWord)


//Cases 
let person = "Emily"

console.log(`the name is ${person.toLowerCase()}`);
console.log(`the name in uppercase is ${person.toUpperCase()}`)

//Slice method in a string & Array 

//In string: Takes 2 arguments: slice(x,y)  x: starts and y: end | x = index staring at 0 & y = position in the string example starting at 1 example 1,2,3 
//Slice in string is used to extact substring efficiently

let preferredFruit = "Mangoes"
console.log(`the preffered fruit is ${preferredFruit.slice(0, 1)}`)
console.log(`the preffered fruit is ${preferredFruit.slice(0, 2)}`)
console.log(`the preffered fruit is ${preferredFruit.slice(0, 1)}`)
console.log(`the preffered fruit is ${preferredFruit.slice(1, 2)}`)
console.log(`the preffered fruit is ${preferredFruit.slice(1, 3)}`)
console.log(`the preffered fruit is ${preferredFruit.slice(0, 4)}`)

let email = "user@example.com";
let secondEmail = "usertest@gmail.com";
let secondDomain = secondEmail.slice(8, secondEmail.length)
let domain = email.slice(4, 16);
console.log(`the domain name is ${domain}`);
console.log(`the second domain is ${secondDomain}`)

//Split and join method 
//Allows us to split and join :)

// We are using template literals in this example. No Arrays returned
let prefferedCourse = "Biology"
let result = prefferedCourse.split("");
let secondResult = prefferedCourse.split(" ")
console.log(`The string splitted is ${result}`)
console.log(`The second string is unchanged ? ${secondResult}`)


//This will return an array because we are not using template literals
let secondPreferedCourse = "Geometry";
let thirdPreferedCourse = "Mathematic";
let splittedString = secondPreferedCourse.split(""); 
let splittedStringThird = thirdPreferedCourse.split(" ");
console.log("The third prefered course is ", splittedString)  // split with no space split("") returns ["G", "e", "o", "m", "e", "t", "r", "y"]
console.log("the second prefered course is ", splittedStringThird) // split with space spily(" ") returns ["Mathematic"]


// //Working with the join() method 

let numberOneCar = "Lambourgini";
let numberTwoCar = "Ferrari";

let joinedSecondCar = numberTwoCar.split(" ");
let joinedString = numberOneCar.split("").join("-"); // This will insert - in the string
console.log("Second car result ", joinedSecondCar)
console.log(joinedString)

//Working with includes()

console.log(numberOneCar.includes("z")) //returns a b0olean false
console.log(numberTwoCar.includes("F")) // returns a boolean true