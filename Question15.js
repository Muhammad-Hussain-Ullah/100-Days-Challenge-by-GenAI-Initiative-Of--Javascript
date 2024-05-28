let guestss = ["Yousuf", "Mayesha", "Najam", "Ali"];
let unable_to_attend = "Ali";
console.log(`Sadly ${unable_to_attend} couldn't join us on our dinner`);
let newquests = "Umar";
guestss[guestss.indexOf(unable_to_attend)] = newquests;
guestss.forEach(Questss => {
    console.log(`Dear ${Questss} would you like us to join at our dinner`);
});
export {};
