// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""


// my solution

function order(words){
    let arr = words.split(' ')
    let r = []
    
    arr.forEach(word => {
      let x = word.split('')
      let num = x.find(el => parseInt(el))
      r.push([word, parseInt(num)])
    })
    
    r.sort((a,b) => a[1] - b[1]).map(x=> x.splice(1,1))
    return r.join(' ')
}



/* EXPLANATION: 
First I splited the words string, and I made a variable "r" with an empty array:
let arr = words.split(' ')
let r = []


After that I looped the splitted words array with a .forEach(),



-Inside of that loop I splitted the word that is being iterated:
let x = word.split('')


-I extracted the number of it, finding in the splitted word the element that can be parseInted:
let num = x.find(el=>parseInt(el))


-And then I just pushed to the "r" array an array with the word and the number inside of it:
r.push([word,parseInt(num)])


I would get something like this:
[ [ 'is2', 2 ], [ 'Thi1s', 1 ], [ 'T4est', 4 ], [ '3a', 3 ] ]
 */