// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

// my solution

function doubleChar(str) {
    return [...str].map(s => s.repeat(2)).join('')
}

const doubleCharr = (str) => str.split('').map(s => s + s).join('');