// This function adds a number and a string that represents a number
function addNumber_String(firstnum, secondnum) {
    // Converts the string to a number and adds it to the first number
    return firstnum + Number(secondnum);
}
// Trying it with 5 and "5"
console.log(addNumber_String(5, "5"));
export {};
// The string "5" is turned into the number 5, and then added to 10.
