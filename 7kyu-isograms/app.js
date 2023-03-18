// // // An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// //isIsogram "Dermatoglyphics" = true
// // isIsogram "moose" = false
// // isIsogram "aba" = false

//P: 
//R: return 
//E: above
//P: 
function isIsogram(str){
    let compareArr = []
    let strArr =  str.toLowerCase().split('') 
    for(let element of strArr){
        if(!compareArr.includes(element)){
            compareArr.push(element)
        }
    }
    
    compareArr = compareArr.join('')
    strArr = strArr.join('')
    
    if(compareArr === strArr){
        return true
    } else {
        return false
    }
   
}

console.log( isIsogram( "Dermatoglyphics")) // = true
console.log( isIsogram( "moose")) // = false
console.log( isIsogram( "aba")) // = false