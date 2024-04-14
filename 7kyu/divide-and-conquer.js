// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.


// my solution 

function divCon(x){
    let total = 0;
    // Iterate through the array
    x.forEach(item => {
        if (typeof item === 'number') {
            // Add to total if the item is a number
            total += item;
        } else if (typeof item === 'string') {
            // Convert to number and subtract from total if the item is a string
            total -= Number(item);
        }
    });
    return total;
}