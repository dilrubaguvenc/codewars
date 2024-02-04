// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, 
// and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]



// my solution 

var capitals = function (word) {
    var caps = [];
      for(var i = 0; i < word.length; i++) {
      if(word[i].toUpperCase() == word[i]) caps.push(i);
    }
    return caps;
};



var capitals = function (word) {
    let arr = [];
      for(let i = 0; i < word.length; i++){
      if(word[i] == word[i].toUpperCase())
        arr.push(i);
    }
    return arr;  
};
