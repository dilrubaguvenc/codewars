// When provided with a number between 0-9, return it in words. Note that the input is guaranteed to be within the range of 0-9.

// Input: 1

// Output: "One".

// If your language supports it, try using a switch statement.


// my solution 

function switchItUp (number) {
    let word; 
    
    switch (number) {
        case 0:
        word = "Zero";
        break;
      case 1:
        word = "One";
        break;
      case 2:
        word = "Two";
        break;
      case 3:
        word = "Three";
        break;
      case 4:
        word = "Four";
        break;
      case 5:
        word = "Five";
        break;
      case 6:
        word = "Six";
        break;
      case 7:
        word = "Seven";
        break;
      case 8:
        word = "Eight";
        break;
      case 9:
        word = "Nine";
        break;
      default:
        word = "Invalid input";
    }
    return word;
}