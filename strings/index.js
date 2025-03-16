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

