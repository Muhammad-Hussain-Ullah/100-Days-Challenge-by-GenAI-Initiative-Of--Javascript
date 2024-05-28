let places = ["Kashmir", "KPK", "Japan", "Iceland", "Dubai", "Greenland", "Switzerland"];
console.log("Orignal order", places);
console.log("Alphabetical order", [...places].sort()); //sort() will make it sort alphabetically
console.log("Orignal oder", places);
console.log("Reverse Alphabetical order", places.sort().reverse()); //sort() will make it sort alphabetically and reverse() will reverse that order 
console.log("Orignal oder", places);
places.reverse(); //reverse() will reverse that order 
console.log("Reverse order", places);
places.reverse(); //reverse() will reverse that order and its already reversed so now this function will make array its orginall
console.log("Orignal order", places);
places.sort(); //another method to arrange the arrray in alphabetic order
console.log("Alphabetical order", places);
places.reverse(); //another method to arrange the arrray in reverse alphabetic order cuz the sort property arranged it in alphabetic order
console.log("Reverse alphabetical order:", places);
export {};
