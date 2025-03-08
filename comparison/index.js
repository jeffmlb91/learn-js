/**
 * Relational Operators & Equality Operators
 * 
 * Relational Operators: <;>;>=;<=
 * Equality Operators: 
 * Strict Equality ===; !==: Checks types and value
 *  Lose Equality ==; !== Checkes value only
 */

// * Relational Operators
console.log( 10 > 10); // false
console.log( 10 < 10); // false
console.log(10 > 20); // false
console.log(10 < 20); // true

let a = 10;
let b = 10;

if(a > b ) {
    console.log('A is greater than b')
} else if ( a < b ) {
    console.log(' B is greater than A')
} else {
    console.log("A and B are equal")
}


// * Equality Operators

console.log(10 === 10); // true checks value and type
console.log(10 === "10") // false checks value and type
console.log(10 == "10") // true Checkes value only
console.log(10 === 20) //false
console.log(10 !== 10); // false


// let x = 10;
// let y = '20';

// if( x === y) {
//     console.log('The value is :', true)
// } else if (x !== y ) {
//     console.log('The value is ', false)
// }

/**
 * Test
 */

//create a variable name (firstFavNum) & store your favourite Number
//Create a variable name (secondFavNum) & store second fav Number
//Check (firstFavNum is greater then secondFavNum)
//Check (firstFavNum is greater then & equal to secondFavNum)
//Check (firstFavNum is less then & equal to secondFavNum)
//Check (firstFavNum is equal to secondNumb) using strict equality operator
//Check (firstFavNum is equal to secondNumb) using loose equality operator
//Check (firstFavNum is equal to secondNumb) using strict non-equality operator
//Check (firstFavNum is equal to secondNumb) using loose non-equality operator


let firstFavNumb = 8;
let secondFavNumb = 7;
console.log('Is first Number greater?',firstFavNumb > secondFavNumb )
console.log('Is first number smaller?', firstFavNumb < secondFavNumb)
console.log('Is first Number greater then and equal?',firstFavNumb >= secondFavNumb)
console.log('Is first Number less then and equal?',firstFavNumb <= secondFavNumb)
console.log('Is first Number less then and equal - Using strick equality?',firstFavNumb === secondFavNumb)
console.log('Is first Number less then and equal - Using loose equality?',firstFavNumb == secondFavNumb)
console.log('Is first Number less then and equal - Using strict non equality?',firstFavNumb !== secondFavNumb)
console.log('Is first Number less then and equal - Using loose non equality?',firstFavNumb != secondFavNumb)


