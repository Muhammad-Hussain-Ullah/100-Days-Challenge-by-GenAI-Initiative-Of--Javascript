let personname = "husSain";
console.log(personname.toLowerCase()); //this will convert the whole variable in lowercase
console.log(personname.toUpperCase()); //this will convert the whole variable in Uppercase
console.log(personname.charAt(0).toUpperCase() + personname.slice(1).toLowerCase());
export {};
//in line 4 personname.charAt(0) it will take control of the first letter .toUpperCase() will make the first letter
//capital here + is concatinating personname.slice(1) it will cancel the first letter i-e "h" and .tolowercase() will
//turn all the remaining to lowercase 
