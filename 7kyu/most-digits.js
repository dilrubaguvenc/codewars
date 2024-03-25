// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.


// my solution 

function findLongest(a) {
    let m = Math.max(...a);
    for (let i = 0; i < a.length; i++) if (m.toString().length == a[i].toString().length ) return a[i];
}



function findLongest(array){
    let num = '0';
    for(let i=0; i<array.length; i++) {
      let string = array[i].toString();
      if(string.length > num.length) {
        num = string;
      }
    }
    return parseInt(num);
}