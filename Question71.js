// Using `let` for a variable that can be reassigned
let age = 16;
age = 17; // Works fine because `let` allows reassignment
console.log(age); // Shows 17
// Trying to reassign a `const`-declared variable
const name = "Hussain";
try {
    name = "Bob"; // This line will cause an error
}
catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable."); // This message is shown
}
export {};
// This example illustrates that `const` prevents changing the variable once it's set.
