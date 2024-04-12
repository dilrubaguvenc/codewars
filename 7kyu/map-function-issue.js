// Your task is to rewrite your own map function which takes :

// an array
// a predicate function func which returns true (boolean) with even arguments
// For example :

// map([1,2,3,4],func)

// produces

// [ false, true, false, true ]  
// The code also has to perform input validation, return :

// 'given argument is not a function' if func is not a function
// 'array should contain only numbers' if any elements are not numbers


// my solution
const func = item =>
  !(item % 2);

const map = (arr, somefunction) =>
  typeof somefunction !== `function` ? `given argument is not a function` :
    arr.some(isNaN) ? `array should contain only numbers` :
      arr.reduce((pre, val) => [...pre, somefunction(+val)], []);


    

const funct = (item) => !(item % 2);
const mapp = (arr, fn) => typeof fn !== 'function' ? 'given argument is not a function' : arr.some(isNaN) ? 'array should contain only numbers' : arr.reduce((acc, cur) => [...acc, fn(cur)], []);