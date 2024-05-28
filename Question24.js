// Equality with strings
console.log("Testing equality with strings:");
console.log("apple" == "apple"); // True
//console.log("apple" == "Apple");False
// Using the lower case function
console.log("Testing with lower case:");
console.log("Banana".toLowerCase() == "banana"); // True
// Numerical tests
console.log("Numerical tests:");
console.log(19 > 6); // True
console.log(9 < 6); // False
// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True
// Test whether an item is in a array
let fruits = ["apple", "banana", "mango"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); // True
//Test whether an item is not in a array
console.log("Is 'tomato' not in fruits?");
console.log(!fruits.includes("tomato")); // True
export {};
