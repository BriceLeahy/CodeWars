// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

//P:
//R:return
//E:20 input (3,5,6,9,10,12,15,18) return 
//P:
// function multiplesOf(num){
//  let sum = []
//     //check for neg num
//  if(num >= -1){
//     //count from 3 to number
//     for(let i = 3; i < num; i++){
//         //if multiple of 3 and 5 display num
//         if(i % 3 === 0 && i % 5 === 0){
//           sum.push(i)
//         //if multiple of 3 display num  
//         } else if(i % 3 === 0){
//           sum.push(i)
//         //if multiple of 5 display num  
//         } else if(i % 5 === 0){
//           sum.push(i)
//         } 
//     }
//  } else {
//     sum.push(0)
//  }
//  return sum.reduce((acc, el) => acc + el,0)
// }
//refactor
function multiplesOf(number){
    let sum = 0
    for(let i = 3; i < number;i++){
        if(i % 3 == 0 || i % 5 == 0){
            sum += i
        }
    }
    return sum
  }
multiplesOf(10) //23 (3,5,6,9,)
multiplesOf(-3) // (0)
