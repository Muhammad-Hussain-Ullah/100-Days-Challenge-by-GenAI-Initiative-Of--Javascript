//it will make a funtion to add a specific number to our funtion
function makeadder(valuetoadd) {
    return function (number) {
        return valuetoadd + number;
    };
}
let magicnum = makeadder(5);
console.log(magicnum(10));
export {};
