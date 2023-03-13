// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral (whole) number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

//P: always solving for a whole number? Answer is a true or false, not returning the square integer?
//R: console log true or false
//E: See above
//P:

const isSquare = num => {
 //check if num param if divided by itself is zero
 if(Math.sqrt(num) % 1 === 0){
 //if so, return true
 return true
 } else {
 //if not, return false
 return false
 }

} 

console.log(isSquare(-1)) // -1  =>  false
console.log(isSquare(0)) //  0  =>  true
console.log(isSquare(3)) //  3  =>  false
console.log(isSquare(4)) //  4  =>  true
console.log(isSquare(25)) // 25  =>  true
console.log(isSquare(26)) // 26  =>  false