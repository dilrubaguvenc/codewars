// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 
// 1^2 + 2^2 + 2^2 = 9
 


// my solution


function squareSum(numbers){
    let square = numbers.reduce((acc, curVal) => {
      return acc + curVal ** 2;
    }, 0);
    return square;
}


function squareSum(numbers){
    return numbers.reduce(function(sum, n){
      return (n*n) + sum;
    }, 0)
}


function squareSum(numbers){
    return numbers.reduce((sum,num) => sum + (num * num), 0);
}


function squareSum(numbers){
    var result = 0;
    for (var i = 0; i < numbers.length; i++) {
      result += (numbers[i] * numbers[i]);
    }
    return result;
}