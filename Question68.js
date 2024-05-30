// This function multiplies two decimal numbers
function multiplyDecimals(num1, num2) {
    // Multiplies the numbers and rounds the result to two decimal places
    return Math.round((num1 * num2) * 100) / 100;
}
// Trying it with 0.3 and 0.5
console.log(multiplyDecimals(0.3, 0.5)); // Shows 0.15
export {};
// After multiplying, we round to make the result easier to read.
