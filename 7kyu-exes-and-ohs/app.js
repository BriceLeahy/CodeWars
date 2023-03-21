// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
   let arr = str.toLowerCase().split('')
   let arrOfX = arr.filter(item => item == 'x')
   let arrOfO = arr.filter(item => item == 'o')
   if(arrOfO.length === arrOfX.length){
    return true
   } else {
    return false
   }
}

console.log( XO("ooxx") ) // true
console.log( XO("xooxx") ) // false
console.log( XO("ooxXm") ) // true
console.log( XO("zpzpzpp") ) // true // when no 'x' and 'o' is present should return true
console.log( XO("zzoo") ) // false