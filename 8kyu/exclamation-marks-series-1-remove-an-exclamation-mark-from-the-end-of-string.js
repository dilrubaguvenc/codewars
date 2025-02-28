// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples

// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"


// my solution 

function remove(string) {
    if(string.endsWith('!')){
        return string.slice(0, -1)
    }
    return string
}

function remove (s) {
    return s.endsWith('!') ? s.slice(0, -1) : s;
}