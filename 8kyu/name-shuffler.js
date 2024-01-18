// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// My solution
const nameShuffler = string => string.split(' ').reverse().join(' ')

function nameShuffler(str){
    return str.split(' ').reverse().join(' ');
}