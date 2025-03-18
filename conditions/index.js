// let time = 12;

// if ( time < 12) {
//     console.log(`Good morning, it is ${time} AM`)
// } else if ( time >= 12 && time < 18) {
//     console.log(`Good afternoon, it is ${time} PM`)
// } else if (time > 18 && time < 22) {
//     console.log(`Good evening, it is ${time} PM.`)
// } else {
//     console.log("Good night")
// }

//Exercise
//1 Create an empty variable named (password)
//2 if the password is equal to 8, print "Welcome"
//if the password is less then or equal to 8 print " Password is too short"
//if password is greater or equal to 8 print "Password is too long" & "Password should be 8 characters"
// If all fails print" provide a password.

let myPassword = 9;
if ( myPassword === 8 ) {
    console.log("Welcome")
} else if ( myPassword <= 8 ) {
    console.log("Password is too short")
} else if (myPassword >= 8) {
    console.log("Password is too long")
} else {
    console.log("Please provide a password")
};


let myArray = ["Banana", "apple", "Mangoes", "Oranges"]

if (myArray.includes("Mangoes")) {
    console.log("One of the fruits in the bucket list is mangoes")
} else {
    console.log("Mangoes are not included")
}

//et myCarArray = ["Honda", "Acura", "Toyota", "Lexus"]

let courseIncluded = "Cinematic";
newWord = courseIncluded.split("").join("-");
console.log(courseIncluded)
console.log(newWord);

if (newWord.includes("C")) {
    console.log(true)
} else {
    console.log(false)
}

