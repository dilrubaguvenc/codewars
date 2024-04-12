// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.


// my solution


function accum(s) {
	let arr = []
  for (let i = 0; i < s.length; i++){
    arr.push(format(s[i], i + 1))
  } return arr.join('-')
}

  function format(s, num){
    let letter = s.toUpperCase()
  
  while (letter.length !== num){
    letter += s.toLowerCase()
  }
    return letter;
}

/* EXPLANATION FOR ABOVE CODE 

Now let’s walk through what this all does. We must create our main function accum with a string as the argument. 
Now we must create an array so that we have more control over our manipulation, and loop through each character in the string. 
When looping through our string, we push the character into the new array, then if needed we repeat this until the correct number of iterations have been created.


While looping, you can see that we also call the format function. This is to handle the casing for the letters so that position [0] will be capitalized and the rest will be lowercase. 
The formatting needs to be done separately for each respective letter in the input, so this will be called inside the for loop. 
After properly looping, we can now rejoin the characters to a string and add a — in between each one for formatting reasons.



*/



function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}


function accum(s) {
	return s.split('').map(function(l,index){
    return l.toUpperCase() + l.toLowerCase().repeat(index)
  }).join('-');
}