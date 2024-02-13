// Your online store likes to give out coupons for special occasions. 
// Some customers try to cheat the system by entering invalid codes or using expired coupons.


// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. 
// All dates will be passed as strings in this format: "MONTH DATE, YEAR".


// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false


// my solution

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode===correctCode && new Date(currentDate) <= new Date(expirationDate);
}



function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    if (enteredCode !== correctCode) {
      return false;
    }
    return new Date(currentDate).getTime() <= new Date(expirationDate).getTime();
}



const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => {
    const currentTime = new Date(currentDate)
    const expirationTime = new Date(expirationDate)
  
    return enteredCode === correctCode && currentTime <= expirationTime
}