// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.


// my solution

function isPalindrome(x) {
    return x.split('').reverse().join('').toLowerCase === x.toLowerCase()
} 

const isPalindrome = x => x.split('').reverse().join('').toLowerCase() === x.toLowerCase()