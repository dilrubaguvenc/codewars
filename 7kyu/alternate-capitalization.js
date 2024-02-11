// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, 
// and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.


// my solution 


function capitalize(s){
    const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
    const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
    return [even, odd];
};



function capitalize(s) {
    let even = '';
    let odd = '';
    for (let i = 0; i < s.length; i++) {
      if (i % 2 === 0) {
        even += s.toUpperCase()[i];
        odd += s[i];
      } else {
        even += s[i];
        odd += s.toUpperCase()[i];
      }
    }
    return [even, odd];
}