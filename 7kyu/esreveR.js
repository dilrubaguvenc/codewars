// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)



// my solution

reverse = function(array) {
    var newArr = [];
    for (var i = array.length-1; i>=0; i--){
        newArr.push(array[i]);
    }
    return newArr;
}

reverse=a=>a.reduce((a,b)=>[b,...a],[])