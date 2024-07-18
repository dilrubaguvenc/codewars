// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// my solution

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}



function fakeBin(str){
    var newStr = "";
    for(var i=0; i<str.length; i++){
      if(+str[i] >= 5){
        newStr += "1"
      }
      else{
        newStr += "0";
      }
    }
    return newStr;
}