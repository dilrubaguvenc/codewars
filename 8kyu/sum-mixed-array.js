// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// my solution

function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
}


function sumMix(x){
    var somme = 0;
    for (i = 0; i<x.length; i++) {
      somme += Number(x[i]);
    }
    return somme;
}


