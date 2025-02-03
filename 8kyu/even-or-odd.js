// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// my solution 

function evenOrOdd(number) {
    if(number % 2 === 0){
        return 'Even'
    } else {
        'Odd'
    }
}

function evenOrOdd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd'
}