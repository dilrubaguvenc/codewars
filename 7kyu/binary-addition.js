// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

// my solution

function addBinary(a,b){
    return (a+b).toString(2)
}




/*Binary is a base-2 number system, meaning it only uses two digits, 0 and 1, to represent all values. 
In contrast, our everyday decimal system is a base-10 system, which uses 10 digits (0 to 9). 
To convert a decimal number to binary, you repeatedly divide the number by 2 and keep track of the remainders.


Step-by-step process to convert a decimal number to binary:
Divide the decimal number by 2.

Write down the remainder (it will be 0 or 1) as the least significant bit (LSB) of the binary number.

Replace the original number with the quotient.

Repeat steps 1-3 until the quotient is 0.

The binary representation is the sequence of remainders read in reverse order.*/