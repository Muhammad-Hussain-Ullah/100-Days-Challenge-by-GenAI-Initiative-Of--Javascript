// A way to make a flexible list
function ObjectWithDynamicKey(key, value) {
    let dynamicObject = {};
    // Setting up a section in the list with a changeable name
    dynamicObject[key] = value;
    return dynamicObject;
}
// Using the flexible list setup for a user's preference
let userPreference = ObjectWithDynamicKey("theme", "dark");
// Showing the user's choice
console.log(userPreference);
export {};
