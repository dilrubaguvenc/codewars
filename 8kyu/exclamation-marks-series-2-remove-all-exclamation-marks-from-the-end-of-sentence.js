// Remove all exclamation marks from the end of sentence.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"



// my solution

function remove(s){
    while (s[s.length - 1] === '!') {
      s = s.slice(0, -1);
    }
    return s;
}


function remove (string) {  
    if (string[string.length - 1] !== '!') return string
    
    return remove(string.slice(0, -1))
}