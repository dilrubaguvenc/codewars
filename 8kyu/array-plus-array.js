// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// my solution 

function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, curr) => acc + curr)
}



function arrayPlusArray(arr1, arr2) {
    let arr = [...arr1, ...arr2];
    return arr.reduce((a, b) => a + b);
}