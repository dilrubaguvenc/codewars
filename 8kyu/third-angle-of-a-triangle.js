// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.


// my solution

function otherAngle(a, b) {
    return 180 - a - b; //ensure 2 angles don't sum up to 180
}


function otherAngle(a, b) {
    return 180-(a+b);
}