// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. 
// Since James doesn't know how to make this happen, he needs your help.

// Task:
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. 
// Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"


// my solution 


function diamond(n){
    if (n <= 0 || !(n % 2)) return null;
    
    const mid = Math.floor(n / 2);
    let diam = "";
    
    for (let i = 0, j = -1; i < n; i++) {
      diam += " ".repeat((i > mid) ? i - mid : mid - i)
            + "*".repeat((i > mid) ? j -= 2 : j += 2)
            + "\n";
    }
    return diam;
}


function diamond(n){
    if(n % 2===0||n < 1)return null;
      let arr = [];
      let mid = Math.ceil(n/2);
      for(let i = 1;i<=n;i++){
          arr.push(' '.repeat(Math.abs(mid-i))+'*'.repeat(n-Math.abs(mid-i)*2));
      }
      return arr.join('\n')+'\n';
}



function diamond(n){
    if (n<=0 || n%2===0) return null;
    var ans=[];
    for (var i=1;i<=n;i+=2) {
      ans.push(' '.repeat((n-i)/2)+'*'.repeat(i));
    }
    return ans.concat(ans.slice(0,ans.length-1).reverse()).join('\n')+'\n';
}