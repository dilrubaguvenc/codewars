// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105


// my solution 


function noBoringZeros(n) {
    while (n % 10 === 0 && n !== 0) {
      n = n / 10
    }
    return n
}


function noBoringZeros(n) {
    return n % 10 || n === 0 ? n : noBoringZeros(n / 10);
}


