// Defines a function that accepts multiple hobbies as arguments
function logHobbies(...hobbies) {
    // Loops through each hobby in the array
    hobbies.forEach(hobby => {
        // Logs a statement for each hobby
        console.log(`I enjoy ${hobby}.`);
    });
}
// Calls the function with three hobbies
logHobbies("eating", "coding", "poetry");
export {};
