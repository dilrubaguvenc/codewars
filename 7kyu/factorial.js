// Your task is to write function factorial.

// my solution


function factorial(n){
    let result = n;
    if(n === 0 || n === 1){
      return 1
    } while (n > 1){
      n--;
      result *= n
    }
    return result;
}


function factorial(n){
    let sum = 1;
     for (let i = 1; i <= n; i++){
       sum = sum * i;
     }
     return sum; 
   
}


function factorial(n){
    return n ? n * factorial(n-1) : 1;
}

