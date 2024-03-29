//Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

//Examples:

function spinWords(str){
    //convert string to array of words
    let newArr = str.split(' ')
    //search array for words of 5 letters or more and reverse
    let answer = newArr.map(el => el.length < 5 ? el : el.split('').reverse().join(''))
    return answer.join(' ')
}


spinWords( "Hey fellow warriors" ) // => returns "Hey wollef sroirraw" 
// spinWords( "This is a test")  //=> returns "This is a test" 
// spinWords( "This is another test" ) //=> returns "This is rehtona test"