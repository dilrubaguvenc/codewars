// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:
// getNumberFromString(s)


// my solution 

function getNumberFromString(s) {
    // use includes method
    let result = ''
    let digits = '0123456789'
    for (let i = 0; i < s.length; i++) {
      if (digits.includes(s[i])) {
        result += s[i]
      }
    }
    return Number(result)
}