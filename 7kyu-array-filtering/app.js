// In this kata you will create a function that takes a list of non-negative 
//integers and strings and returns a new list with the strings filtered out.

//// Return a new array with the strings filtered out

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

//P: always taking in an array? 
//R: return 
//E: see above
//P:
function filter_list(l) {
    return l.filter(el => typeof el ===  'number')
}

filter_list([1,2,'a','b']) //== [1,2]
filter_list([1,'a','b',0,15]) //== [1,0,15]
filter_list([1,2,'aasf','1','123',123]) //== [1,2,123]