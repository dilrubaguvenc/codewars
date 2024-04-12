// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// my solution

function XO(str) {
    let x = [];
    let o = [];
    for(let i = 0; i < str.length; i++){
      if(str[i].toLowerCase() === 'x'){
        x.push(str[i]);
      }else if(str[i].toLowerCase() === 'o'){
        o.push(str[i]);
      }
    } if(x.length == o.length){
      return true;
    }else{
      return false;
    }
}


function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}


function XO(str) {
    var z = str.toLowerCase();
    var x = z.split("x").length;
    var o = z.split("o").length;
    return x == o;
}