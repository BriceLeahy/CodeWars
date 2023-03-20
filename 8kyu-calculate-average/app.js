// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.


function findAverage(arr){
    if(arr.length > 1){
       return arr.reduce((sum, acc) => sum + acc) / arr.length
    } else if(arr.length = 1){
      return Number(arr)
    } else {
        return 0
    }
}