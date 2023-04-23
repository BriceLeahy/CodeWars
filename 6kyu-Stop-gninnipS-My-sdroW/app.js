//Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

//Examples:

function spinWords(str){
    let newArr = str.split(' ')
    newArr.map(el => {
       if(el.length >= 5){
        let reverseStr = ''
        for(let i = str.length - 1; i >= 0; i--){

        }
       }  
    })
}
    console.log(newStr)



spinWords( "Hey fellow warriors" ) // => returns "Hey wollef sroirraw" 
// spinWords( "This is a test")  //=> returns "This is a test" 
// spinWords( "This is another test" ) //=> returns "This is rehtona test"