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

// * Equality Operators

console.log(10 === 10); // true
console.log(10 === 20) //false
console.log(10 !== 10); // false


let x = 10;
let y = '20';

if( x === y) {
    console.log('The value is :', true)
} else if (x !== y ) {
    console.log('The value is ', false)
}
