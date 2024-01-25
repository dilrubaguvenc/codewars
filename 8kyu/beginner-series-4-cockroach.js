// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30

// my solution

function cockroachSpeed(s) {
    return Math.floor(s*27.777778)
}


function cockroachSpeed(s) {
    //multiply km/m by 27.7777777778
    return Math.floor(s*27.7777777778);
}


function cockroachSpeed(s) {
    return Math.floor(s*1000/36);
  }

  