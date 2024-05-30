// This function sees if both inputs are true
function checkBothTrue(First_val, Second_val) {
    // Only says true if both val1 and val2 are true
    return First_val && Second_val;
}
// Trying it with true and false
console.log(checkBothTrue(true, false)); // Shows false
export {};
// It checks two things, but since one is false, the answer is false.
