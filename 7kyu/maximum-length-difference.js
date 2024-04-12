// You are given two arrays a1 and a2 of strings. 
// Each string is composed with letters from a to z. 
// Let x be any string in the first array and y be any string in the second array.


// Find max(abs(length(x) − length(y)))


// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13

// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string


// my solution

function mxdiflg(a1, a2) {
    if(a1.length==0 || a2.length==0)return -1;
    return Math.max(Math.max(...a1.map(x=>x.length))-Math.min(...a2.map(x=>x.length)),Math.max(...a2.map(x=>x.length))-Math.min(...a1.map(x=>x.length)))
}


function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) return -1
  
    const length1 = a1.map(str => str.length)
    const length2 = a2.map(str => str.length)
  
    return Math.max(
      Math.max(...length1) - Math.min(...length2),
      Math.max(...length2) - Math.min(...length1)
    )
}