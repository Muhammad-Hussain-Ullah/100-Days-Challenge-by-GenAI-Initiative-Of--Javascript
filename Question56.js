let mixedArray = [1, "Apple", "Nissan", 3, "Samsung", 7, 9];
console.log(mixedArray);
//shows array which contains different types of datatypes
let onlyString_array = mixedArray.filter(item => typeof item === "string");
console.log(onlyString_array);
export {};
//shows array which contains on string data type
